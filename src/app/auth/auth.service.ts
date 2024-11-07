// src/app/auth/auth.guard.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();
  private user: User | null = null;

  constructor(private router: Router) {}

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.user = result.user;
      this.router.navigate(['/lista-compras']);
    } catch (error) {
      console.error('Erro ao autenticar com Google:', error);
    }
  }

  logout(): void {
    signOut(this.auth).then(() => {
      this.user = null;
      this.router.navigate(['/login']);
    });
  }

  isAuthenticated(): boolean {
    return this.user != null;
  }

  getUser(): User | null {
    return this.user;
  }
}
