import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-quiz-inicial',
  templateUrl: './quiz-inicial.page.html',
  styleUrls: ['./quiz-inicial.page.scss'],
})
export class QuizInicialPage implements OnInit {

  constructor(private router: Router) { }

  abrirQuiz(){
    this.router.navigateByUrl('/quiz');
  }
  ngOnInit() {
  }

}
