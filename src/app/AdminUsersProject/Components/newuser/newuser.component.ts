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
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {

  user: User;
  users: User[];

  // roles: Role[];
  /*roles2 = [{ role: 'role1', checked: true }, { role: 'role2', checked: false},
  { role: 'role3', checked: true }];*/

  constructor(public userService: UserService,
              private notificationService: NotificationService,
              private roleService: RoleService,
              public dialogRef: MatDialogRef<NewuserComponent>) { }

  ngOnInit(): void {

    this.userService.getUser().subscribe(users => this.users = users);

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
    if (this.userService.form.valid) {

      if (!this.userService.form.get('$key').value) {
        this.userService.addUser(this.userService.form.value)
        .subscribe(user => {
          this.users.push(user);
        });

      } else {
        this.userService.updateUser(this.userService.form.value).subscribe();
      }

    this.userService.form.reset();
    this.userService.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
    this.refresh();
    }
  }
  refresh(): void {
    window.location.reload();
   }
  onClear() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
  }

  onClose() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
    this.dialogRef.close();
  }

  onChange(roleName: string, isChecked: boolean) {
    const roleFormArray = <FormArray>this.userService.form.controls.roles;

    if (isChecked) {
      // roleFormArray.push(new FormControl(role));
      this.userService.roles.forEach(r => {
        if (r.role_name === roleName) {
          roleFormArray.push(this.userService.fb.group({
            roleId: r.roleId,
            role_name: roleName,
            description: r.description,
          }));
        }
      });
    } else {
      const index = roleFormArray.controls.findIndex(x => x.value.role_name === roleName);
      console.log(index, roleName);
      roleFormArray.removeAt(index);
    }
  }

}
