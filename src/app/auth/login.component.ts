// src/app/auth/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service'; // Caminho corrigido

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    this.loginService.loginWithGoogle()
      .then(() => {
        this.router.navigate(['/shopping-list']);
      })
      .catch((error: any) => {
        console.error('Erro ao fazer login com Google:', error);
      });
  }

  onLogout() {
    this.loginService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
