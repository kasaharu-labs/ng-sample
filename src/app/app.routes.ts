import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  {
    path: 'counter',
    loadComponent: () => import('./features/counter/counter-page.component'),
  },
];
