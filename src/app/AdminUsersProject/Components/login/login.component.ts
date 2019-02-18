import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Login } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  login: Login;

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log('what i send to server: ' + email, password);

    this.login = new Login(email, password);

    console.log('login obj: ' + this.login.email, this.login.password);

    this.loginService.getUserDetails(this.login);

  }


}
