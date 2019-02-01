import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs';
import { NewuserComponent } from '../Components/newuser/newuser.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private serviceUrl = './assets/users.json';
  private serviceUrl = 'http://localhost:8080/users';

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
    console.log('in service: ' + user.userName_gmail);
    this.form.setValue({
      $key: user.userId,
      fullName: user.name,
      email: user.userName_gmail,
      phone: user.phone,
      password: '123456'
    });
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
   }

   addUser(user): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user, this.httpOptions);
   }
}
