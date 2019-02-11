import { NotificationService } from './../../Services/notification.service';
import { NewuserComponent } from './../newuser/newuser.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { UserService} from '../../../AdminUsersProject/Services/user.service';
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
              private notificationService: NotificationService,
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
      // console.log(results);
    });
  }

  onClick() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);

  }

  onEdit(row) {

    this.userService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    this.dialog.open(NewuserComponent, dialogConfig);
  }

  onDelete(row) {
    if (confirm('Are you sure to delete this record ?')) {
      this.userService.deleteUser(row).subscribe();
      this.notificationService.warn('! Deleted successfully');
    }
  }


}
