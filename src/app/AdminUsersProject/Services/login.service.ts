import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  idToSend: number;
  private postLoginUrl = 'http://localhost:8080/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient,
     private router: Router ) { }

  getUserDetails(username: string, password: string) {
// this will post the user name and passwrd to server

return this.httpClient
.put(this.postLoginUrl, {'email' : username, 'password': password}, this.httpOptions)
.subscribe(
  (response) => {
   // console.log('loginResponse: ' + response.toString);
   this.idToSend = 2;
    this.router.navigate(['/loggitor'], { queryParams: { id : this.idToSend }});
});
// .subscribe(response => console.log(response));
  }
}
