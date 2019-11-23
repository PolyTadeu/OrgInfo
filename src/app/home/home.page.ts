import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

  async alertSair() {
    const alert = await this.alertController.create({
      header:'Obrigada pela visita!',
      subHeader:'Nemo está feliz por você ter se informado, até a próxima.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }]
    });
    await alert.present();
  }
  irParaLogin(){
   this.alertSair();

  }
  irParaQuiz(){
    this.router.navigateByUrl('/quiz-inicial');

  }
  irParaNoticia1(){
    this.router.navigateByUrl('/noticia1');
  }
  irParaNoticia2(){
    this.router.navigateByUrl('/noticia2');
  }
  irParaNoticia3(){
    this.router.navigateByUrl('/noticia3');
  }

  ngOnInit() {
  }

}
