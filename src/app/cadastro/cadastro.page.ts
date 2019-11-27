import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,ValidatorFn, AbstractControl} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 cadastroForm : FormGroup
  constructor(public formBuilder: FormBuilder,public alertController: AlertController,private router: Router) { 
    this.cadastroForm= this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      c_password: ['',[Validators.required, Validators.minLength(8), this.equalto('password') ]],

    });
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let input = control.value;
        let isValid = control.root.value[field_name] == input;
        if (!isValid)
            return {'equalTo': {isValid}};
        else
            return null;
    };
  }

  cadastroUsuario(form){
    this.alertaCadastro(form.value.name);

  }

  async alertaCadastro(nome) {
    const alert = await this.alertController.create({
      header:'Olá,'+nome+',',
      subHeader:'Agora vamos navegar',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/home');
        }
      }]
    });
    await alert.present();
  }
  abrirLogin(){
    this.router.navigateByUrl('/login');
  }

  abrirHome(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
