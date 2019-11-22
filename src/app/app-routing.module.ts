import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'noticia1',
    loadChildren: () => import('./noticia1/noticia1.module').then( m => m.Noticia1PageModule)
  },
  {
    path: 'noticia2',
    loadChildren: () => import('./noticia2/noticia2.module').then( m => m.Noticia2PageModule)
  },
  {
    path: 'noticia3',
    loadChildren: () => import('./noticia3/noticia3.module').then( m => m.Noticia3PageModule)
  },
  {
    path: 'quiz2',
    loadChildren: () => import('./quiz2/quiz2.module').then( m => m.Quiz2PageModule)
  },
  {
    path: 'quiz3',
    loadChildren: () => import('./quiz3/quiz3.module').then( m => m.Quiz3PageModule)
  },
  {
    path: 'quiz4',
    loadChildren: () => import('./quiz4/quiz4.module').then( m => m.Quiz4PageModule)
  },
  {
    path: 'quiz5',
    loadChildren: () => import('./quiz5/quiz5.module').then( m => m.Quiz5PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
