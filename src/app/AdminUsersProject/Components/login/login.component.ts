import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Login } from '../../model/login.model';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  login: Login;
  login2: any = {};

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
    this.login = new Login('', '');
  }


  loginUser() {

   // alert(JSON.stringify(this.login));
    this.loginService.getUserDetails(this.login);

  }


}
