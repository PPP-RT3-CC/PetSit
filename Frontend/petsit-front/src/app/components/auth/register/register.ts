import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   onSubmit(registerForm: NgForm){
    if (registerForm.valid) {
      if (registerForm.value.password !== registerForm.value.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
      }
    }
    console.log(registerForm)
  }
}
