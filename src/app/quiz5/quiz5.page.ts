import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz5',
  templateUrl: './quiz5.page.html',
  styleUrls: ['./quiz5.page.scss'],
})
export class Quiz5Page implements OnInit {

  constructor(public alertController: AlertController,private router: Router) {}

  async alertaCerta() {
    const alert = await this.alertController.create({
      header:'Parabéns!',
      subHeader:'Nemo está feliz com você, agradecemos sua participação !',
      message:'Uma pesquisa recente, publicada na revista científica “Scientific Reports”, constatou que a área de lixo poderia ser compara ao território do Japão.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/home');
        }
      }]
    });
    await alert.present();
  }
  async alertaErrada() {
    const alert2 = await this.alertController.create({
      header:'Resposta Errada!',
      subHeader:'Tente melhorar na Próxima, agradecemos sua participação !',
      message:'Uma pesquisa recente, publicada na revista científica “Scientific Reports”, constatou que a área de lixo poderia ser compara ao território do Japão.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/home');
        }
      }]
    });
    await alert2.present();
  }

  ngOnInit() {
  }

}
