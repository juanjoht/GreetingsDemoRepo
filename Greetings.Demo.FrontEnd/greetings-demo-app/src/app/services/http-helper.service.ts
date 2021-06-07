import { Injectable } from '@angular/core';
import { Constants } from '../common/constants';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  private UrlBaseapi: string;
  public fnCallBackError = this.callBackError.bind(this);

  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.UrlBaseapi = environment.urlBaseApi;
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
  };

  GET<T>(obj: any, urlapi: string, callBack: any) {
    this.http.get<T>(`${this.UrlBaseapi}${urlapi}`, {
        params: obj,
        headers: this.httpOptions.headers
        })
        .subscribe(fm => {
            this.OK<T>(fm, callBack);
        },
            (err: HttpErrorResponse) => {
              this.callBackError(err.message);
            }
        );
  }

  private OK<T>(fm: T, callBack: any) {
    callBack(fm as T, Constants.dataSuccess);
  }

  private callBackError(errorMessaje: any) {
    this.messageService.error(errorMessaje);
}
 
}
