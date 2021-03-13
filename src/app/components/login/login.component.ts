import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  errorMessage: string;

  constructor(public  formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private modalController: ModalController)
  {
    this.emailCtrl = formBuilder.control('', Validators.required);
    this.passwordCtrl = formBuilder.control('', Validators.required);

    this.loginForm = formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  ngOnInit(): void {
    if(this.authenticationService.isLogged()) {
      this.router.navigate(['home']).then();
    }
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value).subscribe(user => {
      this.userService.currentUser = user;
      localStorage.setItem('token', user.token);
      localStorage.setItem('user_id', user._id);
      localStorage.setItem('permissions', user.permissionLevel);
      this.router.navigate(['home']).then();
    }, (error) => {
      switch (error.status) {
        case 401:
          this.errorMessage = 'Email or password is wrong!';
          break;
        case 400:
          this.errorMessage = 'Fields can\'t be empty!';
      }
    });
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    }).then();
  }
}
