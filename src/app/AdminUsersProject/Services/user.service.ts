import { FormBuilder, FormArray } from '@angular/forms';
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs';
import { NewuserComponent } from '../Components/newuser/newuser.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, map, tap } from 'rxjs/operators';
import { Role } from '../model/role.model';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private serviceUrl = 'https://adminfinal5.herokuapp.com/';
  // private serviceUrl = 'http://localhost:8080/';

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  roles: Role[];

  constructor(private http: HttpClient,
              public fb: FormBuilder,
              private roleService: RoleService) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    roles: new FormArray([], Validators.minLength(1))
  });

  initializeFormGroup() {
    this.roleService.getRoles().subscribe(roles => {
      if (!roles) {
        return;
      }
      this.roles = roles;

      this.roles.forEach(x => {
        x.checked = false;
      });
    });
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
      roles: []
    });
    this.form.setControl('roles', this.setFormRoles(user.roles));
  }

  setFormRoles(roleSets): FormArray {
    const roleFormArray = new FormArray([]);
    this.roleService.getRoles().subscribe(roles => {
      if (!roles) {
        return;
      }
      this.roles = roles;

      this.roles.forEach(x => {
        x.checked = false;
      });

      roleSets.forEach(r => {
        roleFormArray.push(this.fb.group({
          roleId: r.roleId,
          role_name: r.role_name,
          description: r.description
        }));

        this.roles.forEach(e => {
          if (e.role_name === r.role_name) {
            e.checked = true;
          }
        });
      });
    });
  return roleFormArray;
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
    const url = `${this.serviceUrl + 'deleteUser'}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions);
   }


}
