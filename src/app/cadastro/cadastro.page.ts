import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,ValidatorFn, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 cadastroForm : FormGroup
  constructor(public formBuilder: FormBuilder) { 
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
  ngOnInit() {
  }

}
