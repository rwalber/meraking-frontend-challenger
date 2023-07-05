import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallBackRequest, RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends RequestService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getRandomUsers(limit: number, callback: CallBackRequest<any>): void {
    this.getRequest(`https://randomuser.me/api/?results=${limit}`, (status, response) => {
      if(status) {
        callback(true, response);
      } else {
        callback(false, response as string);
      }
    });
  }
}
