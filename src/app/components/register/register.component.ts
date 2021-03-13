import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private modalController: ModalController,
              private router: Router) { }

  ngOnInit() {}

  openLegal() {
    this.router.navigate(['/legal']).then(() => this.dismissModal());
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    }).then();
  }

}
