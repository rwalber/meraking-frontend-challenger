import { Users } from '../../models/users.interface';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  @Input() user!: Users;
  userForm!: FormGroup;

  constructor(private modal: NzModalRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [{ value: this.user.id, disabled: true }],
      email: [{ value: this.user.email, disabled: true }],
      username: [{ value: this.user.username, disabled: true }]
    });
  }

  closeModal(): void {
    this.modal.destroy();
  }

}
