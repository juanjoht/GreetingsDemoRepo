import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Language } from 'src/app/models/language.model';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Constants } from 'src/app/common/constants';
import { MessageType } from 'src/app/models/message-type.model';
import { Message } from 'src/app/models/message.model';
import { HttpParams } from '@angular/common/http';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean;
  noFilter: any;  
  languages: Language[] = [];
  MessageTypes: MessageType[] = [];
  languageSelected;

  constructor(private socialAuthService: SocialAuthService, private httpHelperService: HttpHelperService, private messageService: MessageService) {
    this.socialUser = new SocialUser; 
    this.isLoggedin = false;
    this.languageSelected = 0;
    this.homeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
    this.getLanguage();
    this.getMassageType();
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.homeForm.controls['name'].setValue(user.firstName);
      this.isLoggedin = (user != null);
      if(this.isLoggedin){
        this.homeForm.controls['name'].disable();
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.isLoggedin = false;
    this.homeForm.controls['name'].enable();
  }

  getLanguage() {
    this.httpHelperService.GET<Language[]>(JSON.stringify(this.noFilter),
          Constants.apiLanguages,
          this.fnCallBackLanguage.bind(this));
  }

fnCallBackLanguage(obj: Language[]) {
  if (obj !== null) {
    this.languages = obj;
    }
}

getMassageType() {
  this.httpHelperService.GET<MessageType[]>(JSON.stringify(this.noFilter),
        Constants.apiMessageType,
        this.fnCallBackMessageType.bind(this));
}

fnCallBackMessageType(obj: MessageType[]) {
  if (obj !== null) {
    this.MessageTypes = obj;
    }
}

radioChange(event: any) {
  this.languageSelected = event.value;

}

getMessage(messageTypeId: number) {
  let params = new HttpParams();
  params = params.append('languageId', this.languageSelected);
  params = params.append('messageTypeId', messageTypeId);
  this.httpHelperService.GET<Message>(params,
      Constants.apiMessage,
    this.fnCallBackMessage.bind(this));
}


fnCallBackMessage(obj: Message) {
  let message: string  = '';
  if (obj !== null) {
    if (obj.messageTypeId === 2)
    {
      message = `${obj.description} ${this.homeForm.get("name")?.value}`;
    }
    else
    message = obj.description;
    this.messageService.success(message);
    }
}

hasError = (controlName: string, errorName: string) => {
  return this.homeForm.controls[controlName].hasError(errorName);
}

}
