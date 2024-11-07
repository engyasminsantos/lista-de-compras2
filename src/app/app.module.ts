// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from '/Users/iaquine/Downloads/listaprojeto/lista-compras/src/app/auth/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth.guard';
import { routes } from './app.routes';
import { firebaseConfig } from './firebase.config';

@NgModule({
  declarations: [
    //AppComponent,
    LoginComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthGuard]
})
export class AppModule { }
