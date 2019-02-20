import { FormBuilder, FormArray } from '@angular/forms';
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs';
import { NewuserComponent } from '../Components/newuser/newuser.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, map, tap } from 'rxjs/operators';
import { Role } from '../model/role.model';
import { Permission } from '../model/permission.model';
import { PermissionService } from './permission.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  // private baseUrl = 'http://localhost:8080/';
  private baseUrl = 'https://adminfinal5.herokuapp.com/';

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  permissions: Permission[];

  constructor(private http: HttpClient,
              public fb: FormBuilder,
              private permissionService: PermissionService) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    role_name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    permissions: new FormArray([], Validators.minLength(1))
  });

  initializeFormGroup() {
    this.permissionService.getPermissions().subscribe(permissions => {
      if (!permissions) {
        return;
      }
      this.permissions = permissions;

      this.permissions.forEach(x => {
        x.checked = false;
      });
    });
    const permissionFormArray = <FormArray>this.form.controls.permissions;
    for (let i = permissionFormArray.length - 1; i >= 0; i--) {
      permissionFormArray.removeAt(i);
    }
    this.form.setValue({
      $key: null,
      role_name: '',
      description: '',
      permissions: []
    });
  }

  populateForm(role) {

    this.form.setValue({
      $key: role.roleId,
      role_name: role.role_name,
      description: role.description,
      permissions: []
    });
    this.form.setControl('permissions', this.setFormRoles(role.permissions));
  }

  setFormRoles(permissionSets): FormArray {
    const permissionFormArray = new FormArray([]);
    this.permissionService.getPermissions().subscribe(permissions => {
      if (!permissions) {
        return;
      }
      this.permissions = permissions;

      this.permissions.forEach(x => {
        x.checked = false;
      });

      permissionSets.forEach(r => {
        permissionFormArray.push(this.fb.group({
          perId: r.perId,
          per_name: r.per_name
        }));

        this.permissions.forEach(e => {
          if (e.per_name === r.per_name) {
            e.checked = true;
          }
        });
      });
    });
  return permissionFormArray;
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl + 'roles');
  }

  getRoles_Permissions(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl + 'rolesWithPermissions');
  }

  addRole(role): Observable<Role> {
    return this.http.post<Role>(this.baseUrl + 'addRole', role, this.httpOptions);
   }

   updateRole(form): Observable<any> {
    const url = `${this.baseUrl + 'updateRole'}/${form.$key}`;
    return this.http.put(url, form, this.httpOptions);
  }

   deleteRole(role): Observable<Role> {
    const url = `${this.baseUrl + 'deleteRole'}/${role.roleId}`;
    return this.http.delete<Role>(url, this.httpOptions);
   }
}
