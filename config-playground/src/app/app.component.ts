import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _canCompare: boolean = false;
  constructor(private appService: AppService) {
    this.appService.isReady().subscribe((val) => this._canCompare = val);
   }

  title = 'config-playground';
  canCompare() : boolean {
    return this._canCompare;
  }
 
  findDifferences() {
    this.appService.findDifferences();
  }
}
