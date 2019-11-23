import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticia1',
  templateUrl: './noticia1.page.html',
  styleUrls: ['./noticia1.page.scss'],
})
export class Noticia1Page implements OnInit {

  constructor(private router: Router) { }

  irParaHome(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
