import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginComponent} from '../../components/login/login.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }
}
