import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPaginationTableComponent } from './filter-pagination-table.component';

describe('FilterPaginationTableComponent', () => {
  let component: FilterPaginationTableComponent;
  let fixture: ComponentFixture<FilterPaginationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPaginationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPaginationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
