import { Routes } from '@angular/router';
import { rootRedirectGuard } from './guard/root-redirect-guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [rootRedirectGuard],
    children: [], // Componentless route, the guard handles the redirection entirely
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then((m) => m.Login),
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
        {
            path: 'admin-dashboard',
            loadComponent: () => import('./admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
        }
    ]
  }
];
