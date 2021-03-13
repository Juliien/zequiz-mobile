import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.page.html',
  styleUrls: ['./quiz-list.page.scss'],
})
export class QuizListPage implements OnInit {
  categories: CategoryModel;
  item: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
