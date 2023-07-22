import { Route } from '@angular/router';
import { ROUTES } from '../constants/app.constants';

export const PAGE_ROUTES: Route[] = [
  {
    path: ROUTES.HOME,
    loadComponent: () => import('../pages/home/home.component'),
  },
  {
    path: ROUTES.LOGIN,
    loadComponent: () => import('../pages/login/login.component'),
  },
  { path: '**', redirectTo: 'login' },
];
