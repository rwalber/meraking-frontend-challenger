import { Users } from '../../models/users.interface';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() user!: Users;
  userForm!: FormGroup;

  constructor(private modal: NzModalRef, private fb: FormBuilder, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [this.user.id, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      username: [this.user.username, [Validators.required, Validators.minLength(3)]]
    });
  }

  closeModal(): void {
    this.modal.destroy();
  }

  confirmeEdit(): void {
    if(this.userForm.valid) {
      this.modal.triggerOk();
    } else {
      this.notification.error('Error', 'Please, fill all fields!');
    }
  }

}
