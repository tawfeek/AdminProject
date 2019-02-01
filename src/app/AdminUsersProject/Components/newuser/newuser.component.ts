import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { UserService } from './../../Services/user.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  mydate = Date.now();

  user: User;
  users: User[];

  constructor(public userService: UserService) { }

  /*form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });*/

  getUsers(): void {
    this.userService.getUser()
    .subscribe(users => this.users = users);
   }

   ngOnInit(): void {
      this.getUsers();
    }

  /*initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      password: ''
    });
  }*/
  /*onSubmit(): void {
    if (this.form.valid) {
      this.userService.addUser(this.form.value)
        .subscribe(user => {
          this.users.push({
            userId: user.userId,
            name: user.name,
            userName_gmail: user.userName_gmail,
            phone: user.phone,
            password: user.password,
            login: user.login
          });
        });
    this.form.reset();
    this.initializeFormGroup();
    }
  }*/
  onClear() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
  }

  /*populateForm(user) {
    this.userService.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      password: ''
    });
    // this.form.setValue(_.omit(user, 'login'));
    // this.form.patchValue(user);
  }*/


  /*EditFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: 'Tawfeek Masalha',
      email: 'test',
      phone: '',
      password: ''
    });

    console.log('fullName');
  }

  onEdit() {
    // this.form.reset();
    this.EditFormGroup();
  }*/

  /*onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }*/

}
