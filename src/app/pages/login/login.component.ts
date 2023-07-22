import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  loader = false;
  hide = true;
  form!: FormGroup;
  constructor(
    private readonly snack: MatSnackBar,
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  login(): void {
    this.loader = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open('Completa los campos', 'ok', { duration: 4000 });
      this.loader = false;
    } else {
      this.loginService.login(this.form.value).subscribe({
        next: (logged: boolean) => {
          this.loader = false;
          if (logged) {
            this.router.navigate(['home']);
          } else {
            this.snack.open('Credenciales inválidas', 'ok', { duration: 4000 });
          }
        },
        error: () => {
          this.loader = false;
        },
      });
    }
  }
}
