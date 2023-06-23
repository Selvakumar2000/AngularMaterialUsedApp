import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'; //step2 for sorting a table
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements AfterViewInit,OnInit ,OnDestroy {

  constructor() {
    console.log('table constructor called');
   }

  //controls which of the column should be shown and order too
  displayedColumns: string[] = ['id', 'name', 'department', 'college'];
  displayedColumnsData: string[] = ['id', 'name', 'department'];

  //source to be displayed
  dataSource = new MatTableDataSource(STUDENT_DATA);  //step1 for filtering data

  logRowData(row:any){
    console.log(row);
  }

  applyFilter(filterValue:any)//step3 for filtering data
  {
    if(filterValue.target.value !== null)
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

  //sort table   step3 for sorting a table
  @ViewChild(MatSort) sort :MatSort;

  //step2 for pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit()
  {
    console.log('Table OnInit called');
  }
  ngOnDestroy()
  {
    console.log('Table OnDestroy called');
  }

}


export interface StudentData {
  id: number;
  name: string;
  department: string;
  college: string;
}

const STUDENT_DATA: StudentData[] = [
  {id: 1, name: 'Selvakumar',department: 'EEE', college: 'TCE'},
  {id: 2, name: 'Wasim',department: 'Civil', college: 'MEPCO'},
  {id: 3, name: 'Surya',department: 'ECE', college: 'SIT'},
  {id: 4, name: 'Raahul',department: 'Mech', college: 'CIT'},
  {id: 5, name: 'Mani',department: 'IT', college: 'TCE'},
  {id: 6, name: 'Suresh',department: 'CSE', college: 'GCT'},
  {id: 7, name: 'Anand',department: 'EEE', college: 'PSNA'},
  {id: 8, name: 'Bharath',department: 'ECE', college: 'CIT'},
  {id: 9, name: 'Saravana',department: 'IT', college: 'PSG'},
  {id: 10, name: 'Vignesh',department: 'CSE', college: 'TCE'},
];

