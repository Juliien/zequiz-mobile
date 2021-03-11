import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {CategoryModel} from '../../models/category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  category: CategoryModel;

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('categoryId')) {
      this.categoryService.getCategoryByID(sessionStorage.getItem('categoryId')).subscribe(category => this.category = category);
    }
  }

}
