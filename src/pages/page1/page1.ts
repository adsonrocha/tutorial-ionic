import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {LoginPage} from "../login/login";
import {UploadPage} from "../upload/upload";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  chatPage: any = ChatPage;
  loginPage: any = LoginPage;
  uploadPage: any = UploadPage;

  constructor(public navCtrl: NavController) {

  }
}
