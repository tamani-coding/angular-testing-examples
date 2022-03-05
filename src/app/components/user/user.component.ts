import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().toPromise().then( user => {
      this.user = user.results[0];
    });
  }

}
