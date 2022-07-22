import { ApiService } from './../services/api.service';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  genders = ['male', 'female'];
  Register!: FormGroup;
  isloading = false;
  error:string ='';


  constructor(private fb: FormBuilder, private api :ApiService, private route: Router) { }

  ngOnInit(): void {
    this.Register = this.fb.group({
      'username' : new FormControl('',[Validators.maxLength(20),Validators.required]),
      'email'    : new FormControl(null,[Validators.email, Validators.required]),
      'gender'   : new FormControl('male'),
      'answer'   : new FormControl(null),
      'secretQ'  : new FormControl('select'),
      'number'   : new FormControl('',[Validators.required]),
      'password' : new FormControl('')
      });

  }
  onSubmit(){
   if(this.Register.valid){
      this.isloading = true;
      this.api.postuser(this.Register.value)
      .subscribe({
        next : (resd) =>{
          alert("Registered successfully");
          this.route.navigate(['../']);
        },
        error :()=>{
          // console.log(error);
          this.error = 'An error occured'
          alert("Erro while Submiting");
          this.Register.reset();
          this.isloading = false;
        }
      
        
      });
      const email = this.Register.value.email;
      const password = this.Register.value.password;
      this.api.signup(email,password).subscribe(
        resData => {
          console.log(resData);
          this.isloading = false;  
        }
        
      );
    }
    else{
      alert("Enter valid info")
    }

    
  }

}
