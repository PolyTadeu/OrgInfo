import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz4',
  templateUrl: './quiz4.page.html',
  styleUrls: ['./quiz4.page.scss'],
})
export class Quiz4Page implements OnInit {

  constructor(public alertController: AlertController,private router: Router) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você.',
      message:'Apenas 3% da água do mundo é doce, 70% está na forma de gelo ou no solo, sendo 1% dela sendo potável.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz5');
        }
      }]
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima.',
      message:'Apenas 3% da água do mundo é doce, 70% está na forma de gelo ou no solo, sendo 1% dela sendo potável.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz5');
        }
      }]
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
