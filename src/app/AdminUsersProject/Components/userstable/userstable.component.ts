import { NewuserComponent } from './../newuser/newuser.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
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

  displayedColumns = ['seqID', 'userName', 'phone', 'role', 'loggedin', 'actions'];
  // displayedColumns = ['seqID', 'email', 'phone', 'role', 'loggedin', 'actions'];
  dataSource;
  chart = [];

  constructor(private userService: UserService,
              private dialog: MatDialog,
              private newuserComponent: NewuserComponent) { }


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

      console.log('length of Data: ' + results.length);
      console.log('results[0]: ' + results[0].userName);

    });
  }

  onClick() {
    this.newuserComponent.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);
  }

  onEdit(row) {
    this.newuserComponent.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);
  }


}
