import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    name  : "",
    email: "" ,
    password: ""
  }
  constructor(
    private userService: UserService
    ) { }


  ngOnInit(): void {
    //
  }

}
