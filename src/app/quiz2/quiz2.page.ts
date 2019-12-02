import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})
export class Quiz2Page implements OnInit {

  constructor(public alertController: AlertController,private router: Router) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você.',
      message:'Um quilo de carne para chegar até o churrasco precisa de 15,4 mil litros de água',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz3');
        }
      }]
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima.',
      message:'Um quilo de carne para chegar até o churrasco precisa de 15,4 mil litros de água',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz3');
        }
      }]
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
