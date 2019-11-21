import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você.',
      buttons: ['ok']
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima.',
      buttons: ['ok']
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
