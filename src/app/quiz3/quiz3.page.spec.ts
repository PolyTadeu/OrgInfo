import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quiz3Page } from './quiz3.page';

describe('Quiz3Page', () => {
  let component: Quiz3Page;
  let fixture: ComponentFixture<Quiz3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
