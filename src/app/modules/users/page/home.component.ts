import { Users } from '../models/users.interface';
import { mockUsers } from '../mock/users';
import { UsersService } from '../services/users.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { RemoveUserComponent } from '../components/remove-user/remove-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfColumn = [
    {
      title: 'ID',
      compare: (a: Users, b: Users) => a.id - b.id,
      priority: false
    },
    {
      title: 'E-mail',
      compare: (a: Users, b: Users) => a.email.localeCompare(b.email),
      priority: 1
    },
    {
      title: 'Username',
      compare: (a: Users, b: Users) => a.username.localeCompare(b.username),
      priority: 2
    },
    {
      title: 'Actions',
      compare: null,
      priority: false
    }
  ];

  users: Users[] = [];
  displayedUsers: Users[] = [];
  
  loadingData: boolean = true;

  pageSize: number = 5;
  searchString: string = '';

  constructor(private modalService: NzModalService, private notification: NzNotificationService, private service: UsersService) { }

  ngOnInit(): void {
    this.users = mockUsers;
    this.displayedUsers = this.users;
    this.loadingData = false;
  }

  identify(index: number, item: Users): number {
    return item.id;
  }

  search(): void {
    this.displayedUsers = this.users.filter((item) => {
      return item.username.toLowerCase().includes(this.searchString.toLowerCase());
    });
  }

  detectSearchClean(event: any): void {
    if(event === '') {
      this.displayedUsers = this.users;
    }
  }

  getRandomUsers(): void {
    this.loadingData = true;
    this.service.getRandomUsers(this.pageSize*2, (status, response) => {
      if(status) {
        const randomUsers = response.map((item: any, index: number) => {
          return {
            id: item.location.street.number,
            email: item.email,
            username: `${item.name.first} ${item.name.last}`,
          }
        });
        this.users = [...this.users, ...randomUsers];
        this.displayedUsers = this.users;
        this.notification.success('Success', 'Users loaded successfully', {
          nzStyle: { backgroundColor: 'var(--background-notify)' },
        });
      } else {
        this.notification.error('Error', 'Error fetching data in Random-API', {
          nzStyle: { backgroundColor: 'var(--background-notify)' },
        });
      }
      this.loadingData = false;
    });
  }

  removeUser(user: Users): void {
    this.modalService.create({
      nzTitle: 'Remove User',
      nzContent: RemoveUserComponent,
      nzFooter: null,
      nzClosable: false,
      nzComponentParams: { user: user },
      nzOnOk: (result) => {
        this.users = this.users.filter((item) => item.id !== result.user?.id);
        this.displayedUsers = this.users;
        this.notification.success('Success', 'User removed successfully', {
          nzStyle: { backgroundColor: 'var(--background-notify)' },
        });
      },
    });
  }

  createUser(): void {
    this.modalService.create({
      nzTitle: 'Create User',
      nzContent: CreateUserComponent,
      nzFooter: null,
      nzClosable: false,
      nzComponentParams: { element: this.users.length + 1 },
      nzOnOk: (result) => {
        this.users = [...this.users, result.userForm.value];
        this.displayedUsers = this.users;
        this.notification.success('Success', 'User create successfully', {
          nzStyle: { backgroundColor: 'var(--background-notify)' },
        });
      },
    });
  }

  viewUser(user: Users): void {
    this.modalService.create({
      nzTitle: user.username,
      nzContent: ViewUserComponent,
      nzFooter: null,
      nzClosable: false,
      nzComponentParams: { user: user },
    });
  }

  editUser(user: Users, index: number): void {
    this.modalService.create({
      nzTitle: user.username,
      nzContent: EditUserComponent,
      nzFooter: null,
      nzClosable: false,
      nzComponentParams: { user: user },
      nzOnOk: (result) => {
        this.users = this.users.map((item) => {
          if(item.id === result.userForm.value.id) {
            return result.userForm.value;
          }
          return item;
        });
        this.displayedUsers = this.users;
        this.notification.success('Success', 'User updated successfully', {
          nzStyle: { backgroundColor: 'var(--background-notify)' },
        });
      },
    });
  }
}
