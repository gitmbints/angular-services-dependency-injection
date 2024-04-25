import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User('John Cena', 'Male', 'Monthly', 'Active'),
    new User('Triple H', 'Male', 'Yearly', 'Inactive'),
    new User('Bella', 'Female', 'Quaterly', 'Active'),
  ];

  constructor(private logger: LoggerService) {}

  getAllUsers() {
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logger.logMessage(name, status);
  }

  onUserDetailClicked: EventEmitter<User> = new EventEmitter<User>();

  onShowUserDetail(user: User) {
    this.onUserDetailClicked.emit(user);
  }
}
