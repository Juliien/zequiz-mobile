import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  viewsList: UserModel[];
  newsList: UserModel[];
  isDark: boolean = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getPopularCategories().subscribe(categories => this.viewsList = categories);
    this.categoryService.getNewCategories().subscribe(categories => this.newsList = categories);
  }

}
