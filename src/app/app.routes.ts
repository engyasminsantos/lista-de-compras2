import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component'; // Verifique se o caminho está correto
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Verifique se o caminho está correto

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
