import { Injectable } from '@angular/core';
import { User } from '../user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localStorageKey = 'authenticatedUser';

  private registeredUsers: User[] = [
    
    // Usuarios registrados durante el proceso de registro
    { user: '', password: '', confirmPassword: '' },

    // ... otros usuarios registrados
  ];

  register(user: User): void {

    // Lógica de registro
    this.registeredUsers.push(user);
  }

  login(user: User): boolean {

    // Lógica de inicio de sesión
    const foundUser = this.registeredUsers.find(
      (registeredUser) =>
        registeredUser.user === user.user && registeredUser.password === user.password
    );

    if (foundUser) {

      // Almacenar el usuario autenticado en el LocalStorage
      localStorage.setItem(this.localStorageKey, JSON.stringify(foundUser));
    }

    return !!foundUser;
  }

  logout(): void {

    // Eliminar el usuario autenticado del LocalStorage al cerrar sesión
    localStorage.removeItem(this.localStorageKey);
  }

  isAuthenticated(): boolean {

    // Verificar si hay un usuario autenticado en el LocalStorage
    return !!localStorage.getItem(this.localStorageKey);
  }

  getAuthenticatedUser(): User | null {

    // Obtener el usuario autenticado del LocalStorage
    const storedUser = localStorage.getItem(this.localStorageKey);
    return storedUser ? JSON.parse(storedUser) : null;
  }
}