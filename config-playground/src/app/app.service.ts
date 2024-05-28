import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _view1JSON: any;
  _view2JSON: any;


  constructor() { }


  set view1JSON(view1JSON: any){
    this._view1JSON = view1JSON;
  }

  get view1JSON(){
    return this._view1JSON;
  }

  set view2JSON(view1JSON: any){
    this._view2JSON = view1JSON;
  }

  get view2JSON(){
    return this._view2JSON;
  }


}
