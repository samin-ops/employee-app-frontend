import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseURL = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
    ){}


    registerUser(user: User){
      return this.http.post(this.baseURL,user)

    }
}


