import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizInicialPage } from './quiz-inicial.page';

describe('QuizInicialPage', () => {
  let component: QuizInicialPage;
  let fixture: ComponentFixture<QuizInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
