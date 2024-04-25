import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  userList = this.userService.getAllUsers();

  showUserDetail(user: User) {
    this.userService.onShowUserDetail(user);
  }
}
