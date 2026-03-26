import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
