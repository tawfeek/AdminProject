import { FormBuilder, FormArray } from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    roles: new FormArray([])
  });

  initializeFormGroup() {
    const roleFormArray = <FormArray>this.form.controls.roles;
    for (let i = roleFormArray.length - 1; i >= 0; i--) {
      roleFormArray.removeAt(i);
    }
    this.form.setValue({
      $key: null,
      name: '',
      email: '',
      phone: '',
      password: '',
      roles: []
    });
  }

  populateForm(user) {

    this.form.setValue({
      $key: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      roles: [] // temp
      // roles: user.roles
    });
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl + 'users');
   }

   addUser(user): Observable<User> {
    return this.http.post<User>(this.serviceUrl + 'addUser', user, this.httpOptions);
   }

   updateUser(form): Observable<any> {
    const url = `${this.serviceUrl + 'updateUser'}/${form.$key}`;
    return this.http.put(url, form, this.httpOptions);
  }

   deleteUser(user): Observable<User> {
    const url = `${this.serviceUrl + 'deleteUser'}/${user.userId}`;
    return this.http.delete<User>(url, this.httpOptions);
   }


}
