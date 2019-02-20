import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';
import { KeyLogin } from '../model/keyLogin.model';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  idToSend: number;
  myKeyLogin: KeyLogin;
  private postLoginUrl = 'http://localhost:8080/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient,
     private router: Router ) { }

  getUserDetails(login: Login) {
// this will post the user name and passwrd to server

return this.httpClient
.put(this.postLoginUrl, login, this.httpOptions)
.subscribe(
  (response: KeyLogin) => {
    // console.log('my login response:' + JSON.stringify(response.key));
     this.myKeyLogin = new KeyLogin(response.key);
     console.log('my key:' + this.myKeyLogin.key);
     this.idToSend = 2;
     if (this.myKeyLogin.key > 0) {
      this.router.navigate(['/loggitor'], { queryParams: { id : this.myKeyLogin.key }});
     } else {
      // do something
      console.log('login failed');
     }
});

// .subscribe(response => console.log(response));
  }
}
