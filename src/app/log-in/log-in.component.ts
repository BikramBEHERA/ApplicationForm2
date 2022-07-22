import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  title = 'Application_Form';

  LogIn! : FormGroup
  constructor(private fbs: FormBuilder, private api :ApiService, private route: Router) { }
  ngOnInit(): void {
    this.LogIn = this.fbs.group({
      'userID' : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      'password'    : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  onLogin(){
    console.log(this.LogIn);
    const email = this.LogIn.value.email;
    const password = this.LogIn.value.password;
      this.api.signup(email,password).subscribe(
        resData => {
          console.log(resData);
            
        }
        
      );
  }


}
