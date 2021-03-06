import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor( public formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = this.formBuilder.group({
  		email: [null, [Validators.required, Validators.email]],
  		password: [null, [Validators.required, Validators.minLength(8)]],
  	});
  }

  abrirCadastro(){
    this.router.navigateByUrl('/cadastro');
  }

  abrirHome(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
