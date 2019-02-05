import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs';
import { NewuserComponent } from '../Components/newuser/newuser.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private serviceUrl = './assets/us.json';
  private serviceUrl = 'http://localhost:8080/';

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      phone: '',
      password: ''
    });
  }

  populateForm(user) {

    this.form.setValue({
      $key: user.userId,
      fullName: user.name,
      email: user.userName_gmail,
      phone: user.phone,
      password: user.password
    });
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl + 'users');
   }

   addUser(user): Observable<User> {
    return this.http.post<User>(this.serviceUrl + 'addUser', user, this.httpOptions);
   }

   updateUser(user): Observable<any> {
    const url = `${this.serviceUrl}/${user.userId}`;
    return this.http.put(url, user, this.httpOptions);
  }

   deleteUser($key: string): Observable<User> {
    const url = `${this.serviceUrl}/${$key}`;
    return this.http.delete<User>(url, this.httpOptions);
   }


}
