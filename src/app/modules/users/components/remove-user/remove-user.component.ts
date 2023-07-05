import { Users } from '../../models/users.interface';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {

  @Input() user?: Users;

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modal.destroy();
  }

  confirmeRemove(): void {
    this.modal.triggerOk();
  }
}
