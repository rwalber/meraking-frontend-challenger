import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HomeComponent } from './page/home.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersRoutingModule } from './users-routing.module';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    RemoveUserComponent,
    CreateUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  imports: [
    FormsModule,
    NzIconModule,
    CommonModule,
    NzTableModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NzNotificationModule,
  ],
  providers: [
    NzModalService,
  ]
})
export class UsersModule { }
