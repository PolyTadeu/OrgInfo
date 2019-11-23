import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizInicialPageRoutingModule } from './quiz-inicial-routing.module';

import { QuizInicialPage } from './quiz-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInicialPageRoutingModule
  ],
  declarations: [QuizInicialPage]
})
export class QuizInicialPageModule {}
