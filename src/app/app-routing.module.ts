import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
 
// Enviar a los usuarios sin autenticarse a la raiz (LogIn)
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
 
//Redirige a los usuarios autenticados a la vista chat.
const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);
 
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToChat),
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'chat',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'new-page',
    loadChildren: () => import('./pages/new-page/new-page.module').then( m => m.NewPagePageModule)
  }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }