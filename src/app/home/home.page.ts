import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  irParaLogin(){
    this.router.navigateByUrl('/login');

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