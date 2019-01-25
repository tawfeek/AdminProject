import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../../../AdminUsersProject/Services/user.service';
import { Chart } from 'chart.js';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['counter', 'userName', 'phone', 'role', 'loggedin'];
  dataSource;
  chart = [];
  dataLength = 0;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getUser().subscribe(results => {
      if (!results) {
        return;
      }
      let counter = 1;
      results.map(result => {
        result.counter = counter;
        counter++;
      });
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      // to initiate the first column in table
      this.dataLength = results.length;

      console.log('length of Data: ' + results.length);
      console.log('results[0]: ' + results[0].userName);

    });
  }
}
