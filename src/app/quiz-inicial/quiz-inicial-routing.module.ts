import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizInicialPage } from './quiz-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: QuizInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizInicialPageRoutingModule {}
