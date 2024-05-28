import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';

@Component({
  selector: 'app-filter-pagination-table',
  templateUrl: './filter-pagination-table.component.html',
  styleUrls: ['./filter-pagination-table.component.scss']
})
export class FilterPaginationTableComponent implements OnInit {


   dataSource!: MatTableDataSource<{ path: string, value1: any, value2: any }[]>;

  displayedColumns: string[] = ['path', 'value1', 'value2'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.differences().subscribe((differences) => {
      this.dataSource = new MatTableDataSource(differences);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
   });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
