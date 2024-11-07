// src/app/login/login.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  logout() {
    return this.afAuth.signOut();
  }

  isAuthenticated(): boolean {
    return !!this.afAuth.currentUser;
  }
}
