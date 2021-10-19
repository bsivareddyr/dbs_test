import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
Api_URL: any = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }
  getuserDetails(): Observable<any> {
    return this.http.get<any>(`${this.Api_URL}/users`)
  }
  addUserInfo(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(`${this.Api_URL}/users`, data, { headers: headers});
  }
  deleteUser(userid) {
    return this.http.delete(`${this.Api_URL}/users/` + userid);
  }
  updateUserInfo(data, userid) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.put(`${this.Api_URL}/users/` + userid,data, { headers: headers});
  }
}
