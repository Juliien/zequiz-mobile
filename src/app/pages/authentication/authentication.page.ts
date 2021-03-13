import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }

  async presentRegisterModal() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }
}
