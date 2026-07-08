import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../auth-service/auth';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule, 
    PasswordModule, 
    ButtonModule, 
    ReactiveFormsModule // Required for [formGroup] and formControlName
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm!: FormGroup;

  constructor(private auth: Auth, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], // Initialized with empty string instead of null
      password: ['', Validators.required],
    });
  }

  login(): void {
    // Stop if the form is invalid
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Highlights validation errors if you add them later
      return;
    }

    // Extract values directly from the Reactive Form
    const { username, password } = this.loginForm.value;

    this.auth.login(username, password).subscribe({
      next: (response) => {
        this.auth.setUserToken(response.token);
        this.auth.setUserRole(response.roles);
        this.auth.setUsername(response.username);

        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}