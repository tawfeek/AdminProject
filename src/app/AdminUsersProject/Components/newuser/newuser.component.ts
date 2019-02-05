import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { UserService } from './../../Services/user.service';
import { NotificationService } from './../../Services/notification.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {

  mydate = Date.now();

  user: User;
  users: User[];

  constructor(public userService: UserService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<NewuserComponent>) { }
  getUsers(): void {
    this.userService.getUser()
    .subscribe(users => this.users = users);
   }

   ngOnInit(): void {
      this.getUsers();
    }

  onSubmit(): void {
    if (this.userService.form.valid) {

      if (!this.userService.form.get('$key').value) {
        this.userService.addUser(this.userService.form.value)
        .subscribe(user => {
          this.users.push(user);
        });

      } else {
        this.userService.updateUser(this.userService.form.value);
      }

    this.userService.form.reset();
    this.userService.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
    }
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

}
