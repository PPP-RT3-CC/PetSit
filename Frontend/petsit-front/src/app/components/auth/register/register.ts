import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private authService = inject(Auth);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  errorMessage = '';

  role: string = '';
  onRoleChange(value: string) {
    this.role = value;
  }

  onSubmit(registerForm: NgForm){
  if (registerForm.valid) {
    if (registerForm.value.password !== registerForm.value.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
  }
  this.authService.register(registerForm.value).subscribe({
    next: () => {
      this.router.navigate(['/login']);
    },
    error: (err) => {
      this.errorMessage = err.error?.message || 'Erreur inscription';
      this.cdr.detectChanges();
    },
    complete: () => {
      console.log('Register request completed');
    }
});
  console.log(registerForm)
}
}
