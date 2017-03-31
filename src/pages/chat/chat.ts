import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public af: AngularFire) {
    this.lista = af.database.list('https://tutorial-11ef3.firebaseio.com/chat');
  }

  enviar(){
    let m = {
      texto: this.mensagem,
      data: new Date()
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";
    });
  }
}
