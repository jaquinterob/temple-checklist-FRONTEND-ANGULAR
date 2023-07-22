import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './constants/app.constants';

const routes: Routes = [
  {
    path: ROUTES.HOME,
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: ROUTES.LOGIN,
    loadComponent: () => import('./pages/login/login.component'),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
