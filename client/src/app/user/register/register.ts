import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styles: ``,
})
export class Register {
  // constructor(public formBuilder: FormBuilder) {}

  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    fullName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  })

  onSubmit(){
    console.log(this.form.value);
  }
}
