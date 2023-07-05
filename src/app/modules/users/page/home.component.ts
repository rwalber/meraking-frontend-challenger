import { Users } from '../models/users.interface';
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

  users: Users[] = [
    {
      id: 1,
      email: 'walber@teste.com',
      username: 'Walber'
    },
    {
      id: 2,
      email: 'fulano@teste.com',
      username: 'Fulano'
    },
    {
      id: 3,
      email: 'cicrano@teste.com',
      username: 'Cicrano'
    },
    {
      id: 1,
      email: 'walber@teste.com',
      username: 'Walber'
    },
    {
      id: 2,
      email: 'fulano@teste.com',
      username: 'Fulano'
    },
    {
      id: 3,
      email: 'cicrano@teste.com',
      username: 'Cicrano'
    },
    {
      id: 1,
      email: 'walber@teste.com',
      username: 'Walber'
    },
    {
      id: 2,
      email: 'fulano@teste.com',
      username: 'Fulano'
    },
    {
      id: 3,
      email: 'cicrano@teste.com',
      username: 'Cicrano'
    },
    {
      id: 1,
      email: 'walber@teste.com',
      username: 'Walber'
    },
    {
      id: 2,
      email: 'fulano@teste.com',
      username: 'Fulano'
    },
    {
      id: 3,
      email: 'cicrano@teste.com',
      username: 'Cicrano'
    },
  ];
  displayedUsers: Users[] = [];

  pageSize: number = 5;
  searchString: string = '';

  constructor(private modalService: NzModalService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.displayedUsers = this.users;
  }

  identify(index: number, item: Users): number {
    return item.id;
  }

  search(event: any): void {
    this.displayedUsers = this.users.filter((item) => {
      return item.email.toLowerCase().includes(event.toLowerCase()) || item.username.toLowerCase().includes(event.toLowerCase());
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
        this.notification.success('Success', 'User removed successfully', {
          nzStyle: { backgroundColor: '#ecebeb' },
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
        this.notification.success('Success', 'User create successfully', {
          nzStyle: { backgroundColor: '#ecebeb' },
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
        this.notification.success('Success', 'User updated successfully', {
          nzStyle: { backgroundColor: '#ecebeb' },
        });
      },
    });
  }
}
