import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  mydate = Date.now();

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      password: ''
    });
  }
  ngOnInit() {}

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  populateForm(user) {
    /*this.form.setValue({
      $key: null,
      fullName: 'walid hanosh',
      email: user.userName,
      phone: user.phone,
      password: '123456'
    });*/
    this.form.setValue(user);
  }



  /*onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }*/

}
