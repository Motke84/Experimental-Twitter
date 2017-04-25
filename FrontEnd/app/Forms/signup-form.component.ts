import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { UsernameValidator } from "./username.validator";
import { TwitAutorsService } from '../Twiter/twitAutors.service';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/Forms/signup-form.component.html',
    styles:
    [`
   
        .form {
           margin: 10px;
        }
   

   `],
   // providers: [TwitAutorsService]
})
export class SignUpFormComponent implements OnInit {
    signupForm: FormGroup
    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit() {
     
    //    UsernameValidator.autors = this.twitAutorsService.autors;

        this.signupForm = this.formBuilder.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidator.canntContainSpace]),
                UsernameValidator.shouldBeUnique],

            password: ['', Validators.required],
        })
    }
    
    signUp() {
        console.log(this.signupForm.value);

        if(this.signupForm.value.username == 'not')
        this.signupForm.controls['username'].setErrors(
            {
                invalidLogin: true
            });
    }
}