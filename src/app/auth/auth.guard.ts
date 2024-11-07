// src/app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.afAuth.authState.toPromise().then(user => {
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
    });
  }
}
