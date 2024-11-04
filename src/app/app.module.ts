import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './src/app.routes'; // Certifique-se de que o caminho está correto
import { AppComponent } from './app.component'; // O caminho deve estar correto
import { LoginComponent } from './auth/login.component'; // O caminho deve estar correto
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // O caminho deve estar correto
import { FormsModule } from '@angular/forms'; // Importando FormsModule para usar ngModel
import { appRoutes } from './app.routes'; // Verifique se o caminho está correto

@NgModule({
  declarations: [
    AppComponent, // Declarando o AppComponent
    LoginComponent, // Declarando o LoginComponent
    ShoppingListComponent
  ],
  imports: [
    BrowserModule, // Módulo para usar recursos do navegador
    AppRoutingModule, // Módulo de rotas
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente que será iniciado
})
export class AppModule {}
