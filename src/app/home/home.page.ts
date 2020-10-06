import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getusers().subscribe(res => {
      this.users = res;
    });
  }

  remove(item) {
    this.userService.removeUser(item.id);
  }


}
