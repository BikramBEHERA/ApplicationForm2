import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const appRoutes : Routes = [
  {path:'log-in',component : LogInComponent},
  {path:'register',component : RegisterComponent},
  {path:'users',component: UsersComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    UsersComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
