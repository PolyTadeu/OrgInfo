import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(public alertController: AlertController,private router: Router) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você.',
      message:'Cerca de 85%',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz2');
        }
      }]
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima.',
      message:'Cerca de 85%',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz2');
        }
      }]
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
