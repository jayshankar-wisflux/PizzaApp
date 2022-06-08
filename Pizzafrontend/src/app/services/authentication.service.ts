import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// const HeaderOptions={header: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('userloggedin') === 'true' ? true : false
  );

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${environment.serverUrl}/api/users/login`,
      { username, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
  signup(
    username: string,
    email: string,
    password: string,
    mobile: string,
    address: string
  ) {
    return this.http.post<any>(
      `${environment.serverUrl}api/users`,
      { email, username, password, mobile, address },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
