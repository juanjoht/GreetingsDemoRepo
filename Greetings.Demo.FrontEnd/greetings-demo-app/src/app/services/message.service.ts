import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../common/constants';

const config = {
  timeOut: 30000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
};


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  success(message: string) {
    this.toastr.success(message, Constants.title, config);
  }
  error(errorMessage: string) {
    this.toastr.error(errorMessage, Constants.title, config);
  }
}
