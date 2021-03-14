import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUserById().subscribe(user => this.userService.currentUser = user);
  }

  logout() {
    this.authenticationService.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/tabs/home']).then();
    });
  }
}
