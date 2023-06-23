import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-form-array',
  templateUrl: './angular-form-array.component.html',
  styleUrls: ['./angular-form-array.component.css']
})
export class AngularFormArrayComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm: FormGroup;

  constructor() { 
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null,[Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  get hobbyControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  addHobby()
  {
    let controls = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(controls);
  }

  onSubmit()
  {
    console.log(this.signUpForm);
  }

}
