import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importações do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Inicializa o formulário com controles e validadores
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  // Método chamado ao submeter o formulário
  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password, confirmPassword } = this.registerForm.value;

      // Verifica se as senhas coincidem
      if (password !== confirmPassword) {
        this.errorMessage = 'As senhas não coincidem.';
        return;
      }

      // Envia os dados para o backend
      this.authService
        .register({ name, email, password, password_confirmation: confirmPassword })
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
            this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
              duration: 3000,
            });
          },
          error: (err) => {
            this.errorMessage = err.error.message || 'Erro ao registrar.';
            this.snackBar.open(this.errorMessage, 'Fechar', {
              duration: 3000,
            });
          },
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  // Método para alternar a visibilidade da senha
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  // Método para alternar a visibilidade da confirmação de senha
  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
