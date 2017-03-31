import { Component } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  autenticacao: boolean;
  email: string;
  senha: string;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(estado => {
      this.autenticacao = estado !== null;
    });
  }

  cadastrar(){
    let dados = { 'email': this.email, 'password': this.senha };
    this.af.auth.createUser(dados).then(() => {
      console.log(this.autenticacao); // USUÁRIO CRIADO
    }, erro => {
      console.log("Erro no cadastro: "+erro); // TRATAR O ERRO
    });
  }

  login(){
    this.af.auth.login({
      email: this.email,
      password: this.senha,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  logout(){
    this.af.auth.logout();
  }
}
