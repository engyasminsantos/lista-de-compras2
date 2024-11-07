// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from '/Users/iaquine/Downloads/listaprojeto/lista-compras/src/app/auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
