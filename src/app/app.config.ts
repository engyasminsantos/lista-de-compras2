import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes'; // Importando as rotas
import { LoginComponent } from './auth/login.component'; // Importando o LoginComponent
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Importando o ShoppingListComponent

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), // Passando as rotas para provideRouter
    provideHttpClient(withFetch()), // Adicionando withFetch para melhor compatibilidade
    importProvidersFrom(
      BrowserAnimationsModule, // Módulo para animações do Angular
      MatInputModule, // Módulo de entrada do Angular Material
      MatButtonModule, // Módulo de botão do Angular Material
      MatIconModule, // Módulo de ícone do Angular Material
      MatListModule, // Módulo de lista do Angular Material
      MatCardModule, // Módulo de cartão do Angular Material
      MatCheckboxModule, // Módulo de checkbox do Angular Material
      FormsModule // Incluindo o FormsModule para usar ngModel
    ),
  ],
  // Note que `declarations` não é uma propriedade válida em `ApplicationConfig`
};

// Verifique se você está utilizando esses componentes nos templates correspondentes.
// Por exemplo, adicione o selector do LoginComponent em um template relevante.
