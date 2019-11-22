import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.page.html',
  styleUrls: ['./quiz3.page.scss'],
})
export class Quiz3Page implements OnInit {

  
  constructor(public alertController: AlertController,private router: Router) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz4');
        }
      }]
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/quiz4');
        }
      }]
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
