import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Inicialize com uma string vazia
  password: string = ''; // Inicialize com uma string vazia

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password); // Passando username e password
  }
}
