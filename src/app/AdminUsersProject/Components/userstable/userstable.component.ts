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

  displayedColumns = ['seqID', 'userName', 'phone', 'loggedin', 'actions'];
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
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      // to initiate the first column in table

      /*console.log('length of Data: ' + results.length);
      console.log('results[0]: ' + results[0].name);*/

    });
  }

  onClick() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);
  }

  onEdit(row) {
/*
    console.log('results[0]: ' + row.userName_gmail);
    console.log('name ' + row.name);
    console.log('userId ' + row.userId);
 */
    this.userService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);
  }


}
