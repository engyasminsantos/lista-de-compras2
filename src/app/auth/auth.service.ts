import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedStatus: boolean = false; // Status da autenticação

  constructor(private router: Router) {}

  // Verifica se o usuário está autenticado
  isAuthenticated(): boolean {
    // Aqui verificamos se existe um token de autenticação no localStorage
    const token = localStorage.getItem('authToken');
    this.isAuthenticatedStatus = !!token; // Atualiza o status da autenticação
    return this.isAuthenticatedStatus; // Retorna verdadeiro ou falso
  }

  // Método de login que simula autenticação
  login(username: string, password: string): void {
    // Aqui você implementaria a lógica de autenticação real, como uma chamada a uma API
    // Para o exemplo, vamos simular uma autenticação bem-sucedida
    if (username === 'user' && password === 'password') { // Simulação simples
      localStorage.setItem('authToken', 'token'); // Armazena um token fictício
      this.isAuthenticatedStatus = true; // Atualiza o status da autenticação
      this.router.navigate(['/shopping-list']); // Redireciona para a lista de compras
    } else {
      // Lógica para lidar com falha de autenticação
      alert('Login falhou. Usuário ou senha inválidos.'); // Exibe um alerta simples
    }
  }

  // Navega para a página de login
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Método para fazer logout
  logout(): void {
    localStorage.removeItem('authToken'); // Remove o token do localStorage
    this.isAuthenticatedStatus = false; // Atualiza o status da autenticação
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
