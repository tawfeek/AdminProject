import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from '../model/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private baseUrl = 'https://adminfinal5.herokuapp.com/';
  // private baseUrl = 'http://localhost:8080/';

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  getPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.baseUrl + 'permissions');
  }
}
