import { Routes } from '@angular/router';
import { User } from './user/user';
import { Login } from './user/login/login';
import { Register } from './user/register/register';

export const routes: Routes = [
  {
    path: '',
    component: User,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
