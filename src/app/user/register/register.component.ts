import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {user:'', password:'', confirmPassword:''};
  error: string="";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void{
    if (this.validateFields() && this.validatePasswords()) {
      
      // Lógica del registro
      this.authService.register(this.user);

      // Redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
    }
  } 

  private validateFields(): boolean {
    const fieldsValid =
      this.user.user.trim() !== '' &&
      this.user.password.trim() !== '' &&
      this.user.confirmPassword.trim() !== '';

    if (!fieldsValid) {
      this.error = 'Todos los campos son obligatorios';
    } else {
      this.error = ''; // Limpiar el mensaje de error si los campos son válidos.
    }

    return fieldsValid;
  }

  private validatePasswords(): boolean {
    const passwordsMatch = this.user.password === this.user.confirmPassword;

    if (!passwordsMatch) {
      this.error = 'Las contraseñas no coinciden';
    } else {
      this.error = ''; // Limpiar el mensaje de error si las contraseñas coinciden.
    }

    return passwordsMatch;
  }
}