import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticia2',
  templateUrl: './noticia2.page.html',
  styleUrls: ['./noticia2.page.scss'],
})
export class Noticia2Page implements OnInit {

  constructor(private router: Router) { }
  irParaHome(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
