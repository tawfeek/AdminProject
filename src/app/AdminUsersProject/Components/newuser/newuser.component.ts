import { Role } from './../../model/role.model';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { UserService } from './../../Services/user.service';
import { NotificationService } from './../../Services/notification.service';
import { UserstableComponent } from '../userstable/userstable.component';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {

  mydate = Date.now();

  user: User;
  users: User[];
  /*roles = [{ role: 'Role 1', checked: false }, { role: 'Role 2', checked: false},
  { role: 'Role 3', checked: false }, { role: 'Role 4', checked: false }];*/
  roles: Role[];

  constructor(public userService: UserService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<NewuserComponent>) { }
  getUsers(): void {
    this.userService.getUser()
    .subscribe(users => this.users = users);
  }

   ngOnInit(): void {
      this.getUsers();
      /*this.users.forEach((item) => {
        this.roles = item.roles;
      });*/
      /*for (let i = 0; i < this.users.length; i++) {
        this.roles[i] = this.users[i].roles;
      }
      console.log(this.roles);*/
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
    }
  }

  onClear() {
    /*this.roles.forEach((item) => {
      item.checked = false;
    });*/
    this.userService.form.reset();
    this.userService.initializeFormGroup();
  }

  /*UnCheckAll(chk) {
    for (let i = 0; i < this.roles.length; i++) {
      this.roles[i].isSelected = false;
    }
  }*/

  /*uncheckAll(ev) {
    this.roles.forEach(x => x.state = ev.target.checked);
  }*/

  onClose() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
    this.dialogRef.close();
  }

  onChange(role: string, isChecked: boolean) {
    const roleFormArray = <FormArray>this.userService.form.controls.roles;

    if (isChecked) {
      roleFormArray.push(new FormControl(role));
    } else {
      const index = roleFormArray.controls.findIndex(x => x.value === role);
      roleFormArray.removeAt(index);
    }
  }

}
