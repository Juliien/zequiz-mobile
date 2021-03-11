import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizListPageRoutingModule } from './quiz-list-routing.module';

import { QuizListPage } from './quiz-list.page';
import {CategoryComponent} from '../../components/category/category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizListPageRoutingModule,
  ],
    declarations: [QuizListPage, CategoryComponent]
})
export class QuizListPageModule {}
