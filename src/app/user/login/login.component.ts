import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   user: User = { user: '', password: '', confirmPassword: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.error = ''; // Limpiar el mensaje de error antes de realizar la validación.

    if (this.validateFields()) {
      // Lógica de inicio de sesión
      if (this.authService.login(this.user)) {
        // Redirige a la página principal (puedes ajustar la ruta según tu aplicación)
        this.router.navigate(['/home']);
      } else {
        this.error = 'Credenciales inválidas';
      }
    }
  }

  private validateFields(): boolean {
    if (!this.user.user.trim() || !this.user.password.trim()) {
      this.error = 'Todos los campos son obligatorios';
      return false;
    }

    return true;
  }
}