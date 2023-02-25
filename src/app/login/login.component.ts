import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   const login = new UntypedFormGroup({
//     email: new UntypedFormControl(''),
//     password: new UntypedFormControl(''),
// });
}
