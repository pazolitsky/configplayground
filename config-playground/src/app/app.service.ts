import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _view1JSON: any = null;
  _view2JSON: any = null;
  _ready: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _differences: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }


  set view1JSON(view1JSON: any){
    this._view1JSON = view1JSON;
    this.updateState();
  }

  get view1JSON(){
    return this._view1JSON;
  }

  set view2JSON(view1JSON: any){
    this._view2JSON = view1JSON;
    this.updateState();
  }

  get view2JSON(){
    return this._view2JSON;
  }

  updateState() {
    var value : boolean = this._view1JSON !== null && this._view2JSON !== null;
    this._ready.next(value);
  }

  isReady(): Observable<boolean> {
    return this._ready;
  }

  differences(): Observable<any> {
    return this._differences;
  }

  findDifferences() {
    let view1Json = this.view1JSON;
    let view2Json = this.view2JSON;
    let differences = this.compareJSON(view1Json, view2Json);
    this._differences.next(differences);
  }

  compareJSON(obj1: any, obj2: any, path: string = ''): { path: string, value1: any, value2: any }[] {
    const differences: { path: string, value1: any, value2: any }[] = [];

    const formatPath = (key: string) => (path ? `${path}.${key}` : key);

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      if (obj1 !== obj2) {
        differences.push({ path, value1: obj1, value2: obj2 });
      }

      return differences;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
        differences.push({ path, value1: obj1.length, value2: obj2.length });
      }
      const len = Math.max(obj1.length, obj2.length);
      for (let i = 0; i < len; i++) {
        differences.push(...this.compareJSON(obj1[i], obj2[i], `${path}[${i}]`));
      }
      return differences;
    } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
      differences.push({ path, value1: obj1, value2: obj2 });
      return differences;
    }

    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    keys.forEach(key => {
      if (!(key in obj1)) {
        differences.push({ path: formatPath(key), value1: 'not exists', value2: 'exists' });
      } else if (!(key in obj2)) {
        differences.push({ path: formatPath(key), value1: 'exists', value2: 'not exists' });
      } else {
        differences.push(...this.compareJSON(obj1[key], obj2[key], formatPath(key)));
      }
    });

    return differences;
  }
}
