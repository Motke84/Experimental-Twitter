"use strict";
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.canntContainSpace = function (control) {
        var space = control.value.indexOf(' ');
        if (space >= 0) {
            return {
                index: space,
                canntContainSpace: true,
            };
        }
        return null;
    };
    UsernameValidator.shouldBeUnique2 = function (control) {
        return new Promise(function (resolve, reason) {
            setTimeout(function () {
                //   console.log(UsernameValidator.autors);
                //    var user = UsernameValidator.autors.find(e => e.AutorUser == control.value);
                //   if( user != null)
                //       resolve({ shouldBeUnique: true });
                //     else
                //          resolve(null);
            }, 2000);
        });
    };
    UsernameValidator.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reason) {
            setTimeout(function () {
                console.log("Promise");
                var user = control.value;
                if (user == "moti")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
//# sourceMappingURL=username.validator.js.map