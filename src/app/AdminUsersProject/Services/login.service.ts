import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private postLoginUrl = 'http://localhost:8080/login';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private httpClient: HttpClient ) { }

  getUserDetails(user, pass) {
// this will post the user name and passwrd to server
return this.httpClient.put(this.postLoginUrl, {
 'email' : user,
'password' : pass,
},
this.httpOptions).subscribe((response) => {

  console.log('Response is: ,' + response);
},
(error) => {
  console.error('An error occurred, ', error);
});
}
}
