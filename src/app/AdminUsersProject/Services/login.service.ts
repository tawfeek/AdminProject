import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';
import { KeyLogin } from '../model/keyLogin.model';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../Services/notification.service';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  idToSend: number;
  myKeyLogin: KeyLogin;
  // private postLoginUrl = 'http://localhost:8080/login';
  private postLoginUrl = 'https://adminfinal5.herokuapp.com/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient,
     private router: Router, private notificationService: NotificationService) { }

  getUserDetails(login: Login) {
// this will post the user name and passwrd to server

return this.httpClient
.put(this.postLoginUrl, login, this.httpOptions)
.subscribe(
  (response: KeyLogin) => {
     this.myKeyLogin = new KeyLogin(response.key);
     console.log('my key:' + this.myKeyLogin.key);
     if (this.myKeyLogin.key > 0) {
      this.notificationService.success('login success');
      this.router.navigate(['/loggitor'], { queryParams: { id : this.myKeyLogin.key }});
     } else {
      // do something
this.notificationService.warn('login failed');

      console.log('login failed');
     }
});

// .subscribe(response => console.log(response));
  }
}
