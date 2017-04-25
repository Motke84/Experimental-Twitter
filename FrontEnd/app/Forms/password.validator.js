"use strict";
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.passwordNotMatch = function (group) {
        var ctrl1 = group.controls['controlName1'];
        var ctrl2 = group.controls['controlName2'];
        if (ctrl1.value != ctrl2.value) {
            return {
                PasswordNotMatch: true,
            };
        }
        return null;
    };
    return PasswordValidator;
}());
PasswordValidator.passwordNotMatch2 = function (controlName1, controlName2) {
    return function (group) {
        var ctrl1 = group.controls[controlName1];
        var ctrl2 = group.controls[controlName2];
        //  console.log(ctrl1.value);
        //   console.log(ctrl2.value);
        if (ctrl1.value != ctrl2.value) {
            return {
                passwordNotMatch: true,
            };
        }
        return null;
    };
};
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=password.validator.js.map