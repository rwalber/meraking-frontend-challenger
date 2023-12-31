import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Input() element!: number;
  userForm!: FormGroup;

  constructor(private modal: NzModalRef, private fb: FormBuilder, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [this.element, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  closeModal(): void {
    this.modal.destroy();
  }

  confirmeCreate(): void {
    if(this.userForm.valid) {
      this.modal.triggerOk();
    } else {
      this.notification.error('Error', 'Please, fill all fields!');
    }
  }

}
