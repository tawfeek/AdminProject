import { NotificationService } from './../../Services/notification.service';
import { NewuserComponent } from './../newuser/newuser.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { UserService} from '../../../AdminUsersProject/Services/user.service';
import { Chart } from 'chart.js';
import { DataSource } from '@angular/cdk/table';
import { Role } from '../../model/role.model';
import { RoleService } from '../../Services/role.service';
import { NewroleComponent } from '../newrole/newrole.component';

@Component({
  selector: 'app-rolestable',
  templateUrl: './rolestable.component.html',
  styleUrls: ['./rolestable.component.css']
})
export class RolestableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['seqID', 'Role name', 'Description', 'Assigned', 'actions'];
  dataSource;

  constructor(private roleService: RoleService,
              private notificationService: NotificationService,
              private dialog: MatDialog) { }


  ngOnInit() {
    this.roleService.getRoles_Permissions().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  onClick() {
    this.roleService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewroleComponent, dialogConfig);

  }

  onEdit(row) {

    this.roleService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    this.dialog.open(NewroleComponent, dialogConfig);
  }

  onDelete(row) {
    if (confirm('Are you sure you want to permanently delete this role?')) {
      this.roleService.deleteRole(row).subscribe();
      this.notificationService.warn('! Deleted successfully');
    }
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

}
