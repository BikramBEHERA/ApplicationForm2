import { ApiService } from './../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Userdatalist : any = [];

  constructor(private apis : ApiService) { }

  ngOnInit(): void {
    this.fechusers();
  }
  private fechusers() {
    this.apis.getuser().subscribe({
      next:(res) => {
        this.Userdatalist.push(res)
        console.log(this.Userdatalist);
        
      }
    })
  }

}
