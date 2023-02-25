import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  // registrationForm!: FormGroup<{
  //   name: FormControl<string | null>;
  //   email: FormControl<string | null>;
  //   age: FormControl<string | null>;
  //   contact: FormControl<string | null>;
  //   place: FormControl<string | null>;
  // }>;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl(''),
    //   age: new FormControl('', Validators.required),
    //   contact: new FormControl('', Validators.required),
    //   place: new FormControl('', Validators.required),
    // });
  }
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    age: new FormControl('', [Validators.required,Validators.pattern("[10-99]{2}")]),
    contact: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
    place: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  });

  onSubmit() {
    console.warn(this.registrationForm.value);
  }
  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get age() {
    return this.registrationForm.get('age');
  }
  get contact() {
    return this.registrationForm.get('contact');
  }
}
