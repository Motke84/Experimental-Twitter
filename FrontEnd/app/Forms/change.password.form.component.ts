import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { PasswordValidator } from "./password.validator";
import { TwitAutorsService } from '../Twiter/twitAutors.service';

declare var bootbox: any;

@Component({
    selector: 'change-pass-form',
    templateUrl: 'app/Forms/change.password.form.component.html',
    styles:
    [`
   
        .form {
           margin: 10px;
        }
   

   `],
    // providers: [TwitAutorsService]
})
export class ChangePasswordFormComponent implements OnInit {
    changePassForm: FormGroup;
    bootbox: any;

    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit() {
        this.changePassForm = this.formBuilder.group({
            oldPass: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)])],

            newPass: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)])],

            confirmPass: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)])]
        }, { validator: PasswordValidator.passwordNotMatch2('newPass', 'confirmPass') });
        //

    }

    changePass() {
        console.log(this.changePassForm.value);

        if (this.changePassForm.value['oldPass'] != '54321')
            this.changePassForm.controls['oldPass'].setErrors(
                {
                    invalidLogin: true
                });

        if (this.changePassForm.valid) {
            bootbox.alert({
                message: "Password successfully changed",
                className: 'bb-alternate-modal'
            });
        }
        // alert("Password successfully changed.");

    }
}