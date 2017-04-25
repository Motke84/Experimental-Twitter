"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var username_validator_1 = require("./username.validator");
var SignUpFormComponent = (function () {
    function SignUpFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    SignUpFormComponent.prototype.ngOnInit = function () {
        //    UsernameValidator.autors = this.twitAutorsService.autors;
        this.signupForm = this.formBuilder.group({
            username: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    username_validator_1.UsernameValidator.canntContainSpace
                ]),
                username_validator_1.UsernameValidator.shouldBeUnique],
            password: ['', forms_1.Validators.required],
        });
    };
    SignUpFormComponent.prototype.signUp = function () {
        console.log(this.signupForm.value);
        if (this.signupForm.value.username == 'not')
            this.signupForm.controls['username'].setErrors({
                invalidLogin: true
            });
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/Forms/signup-form.component.html',
        styles: ["\n   \n        .form {\n           margin: 10px;\n        }\n   \n\n   "],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map