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
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

   // this.login = new Login(username, password);
   // login : new Login(username, password);
    this.loginService.getUserDetails( username, password );
    console.log('what i send to server: ' + username, password);
  }

}
