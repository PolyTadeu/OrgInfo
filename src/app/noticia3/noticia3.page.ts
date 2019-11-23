import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticia3',
  templateUrl: './noticia3.page.html',
  styleUrls: ['./noticia3.page.scss'],
})
export class Noticia3Page implements OnInit {

  constructor(private router: Router) { }
 
  irParaHome(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
