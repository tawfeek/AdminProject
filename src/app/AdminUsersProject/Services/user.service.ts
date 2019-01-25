import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { User } from '../model/user.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 private serviceUrl = 'http://localhost:8085/usersonhp';
// private serviceUrl = 'https://adminfinal1.herokuapp.com/usersonhp';
  constructor(private http: HttpClient) { }

    getUser(): Observable< User[]> {
      return this.http.get<User[]>(this.serviceUrl);



   }
}
