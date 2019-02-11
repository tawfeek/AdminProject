import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private postLoginUrl = 'http://localhost:8080/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient ) { }

  getUserDetails(login) {
// this will post the user name and passwrd to server
return this.httpClient.put(this.postLoginUrl, login, this.httpOptions);
  }
}
