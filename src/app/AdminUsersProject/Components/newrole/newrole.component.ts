import { Permission } from './../../model/permission.model';
import { Role } from './../../model/role.model';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { UserService } from './../../Services/user.service';
import { NotificationService } from './../../Services/notification.service';
import { RoleService } from './../../Services/role.service';
import { UserstableComponent } from '../userstable/userstable.component';

@Component({
  selector: 'app-newrole',
  templateUrl: './newrole.component.html',
  styleUrls: ['./newrole.component.css']
})
export class NewroleComponent implements OnInit {

  role: Role;
  roles: Role[];

  constructor(public roleService: RoleService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<NewroleComponent>) { }

  ngOnInit(): void {

    this.roleService.getRoles_Permissions().subscribe(roles => this.roles = roles);

    /*this.roleService.getRoles().subscribe(roles => {
    if (!roles) {
    return;
    }
    this.roles = roles;

    this.roles.forEach(r => {
    r.checked = false;
    });
    console.log(this.roles);
    });*/
  }

  onSubmit(): void {
    if (this.roleService.form.valid) {

      if (!this.roleService.form.get('$key').value) {
        this.roleService.addRole(this.roleService.form.value)
        .subscribe(role => {
        this.roles.push(role);
        });

      } else {
        this.roleService.updateRole(this.roleService.form.value).subscribe();
      }

      this.roleService.form.reset();
      this.roleService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
      this.refresh();
    }
  }

  refresh(): void {
    window.location.reload();
  }

  onClear() {
    this.roleService.form.reset();
    this.roleService.initializeFormGroup();
  }

  onClose() {
    this.roleService.form.reset();
    this.roleService.initializeFormGroup();
    this.dialogRef.close();
  }

  onChange(perName: string, isChecked: boolean) {
    const permissionFormArray = <FormArray>this.roleService.form.controls.permissions;

    if (isChecked) {
    // roleFormArray.push(new FormControl(role));
    this.roleService.permissions.forEach(p => {
      if (p.per_name === perName) {
        permissionFormArray.push(this.roleService.fb.group({
          perId: p.perId,
          per_name: perName,
        }));
      }
    });
    } else {
      const index = permissionFormArray.controls.findIndex(x => x.value.per_name === perName);
      // console.log(index, perName);
      permissionFormArray.removeAt(index);
    }
  }

}
