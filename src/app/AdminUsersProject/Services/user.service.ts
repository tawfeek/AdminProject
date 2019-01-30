import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs';
import { NewuserComponent } from '../Components/newuser/newuser.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private serviceUrl = './assets/users.json';
  private serviceUrl = 'https://adminfinal1.herokuapp.com/usersonhp';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);



   }


}
