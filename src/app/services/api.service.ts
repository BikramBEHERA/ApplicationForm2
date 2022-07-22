import { RegisterComponent } from './../register/register.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user = new Subject();

  constructor(private http : HttpClient ) { }

  postuser(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
  }
  getuser(){
    return this.http.get<any>("http://localhost:3000/posts")
  }
  signup(email : string,password: string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZKP-eEYLQBZd7-knS-ln1GrWrqrpqAVE',
    {
      email: email,
      password : password,
      returnSecureToken: true
    });
  }
  signin(email : string,password: string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZKP-eEYLQBZd7-knS-ln1GrWrqrpqAVE',
    {
      email: email,
      password : password,
      returnSecureToken: true
    });
  }
}
