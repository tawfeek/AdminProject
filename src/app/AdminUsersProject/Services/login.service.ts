import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  routLink;
  routId;
  private postLoginUrl = 'http://localhost:8080/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient,
     private router: Router ) { }

  getUserDetails(login: Login) {
// this will post the user name and passwrd to server

return this.httpClient
.put(this.postLoginUrl, login, this.httpOptions)
.subscribe(
  (response) => {
    console.log(response);
    this.routId = 2;
    this.routLink = '/loggitor' + '/' + this.routId;
    this.router.navigate([this.routLink]);
});
// .subscribe(response => console.log(response));
  }
}
