import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private userService: UserService) {}

  name: string = '';
  gender: string = 'male';
  subType: string = 'Yearly';
  status: string = 'Active';

  createNewUser() {
    this.userService.createUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
