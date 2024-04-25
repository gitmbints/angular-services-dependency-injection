import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  selectedUser: User | undefined;

  userService = inject(UserService);

  ngOnInit() {
    this.userService.onUserDetailClicked.subscribe((user: User) => {
      this.selectedUser = user;
    });
  }
}
