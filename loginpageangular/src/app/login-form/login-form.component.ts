import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  submitForm() {
    // Log the username and password
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Show submitted alert message
    alert('Form submitted!');

    // Handle form submission logic here
    // For example, you can send the form data to a server
    // and handle the response accordingly
  }
}
