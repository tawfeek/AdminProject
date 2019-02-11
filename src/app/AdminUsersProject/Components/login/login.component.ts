import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Login } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    login : new Login(username, password);
    this.loginService.getUserDetails( login );
    console.log(username, password);
  }

}
