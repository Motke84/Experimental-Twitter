"use strict";
var router_1 = require("@angular/router");
var twit_list_component_1 = require("./Twiter/twit-list.component");
var user_form_component_1 = require("./Forms/user.form.component");
var signup_form_component_1 = require("./Forms/signup-form.component");
var change_password_form_component_1 = require("./Forms/change.password.form.component");
var text_finder_form_component_1 = require("./Work/text.finder.form.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: 'twiter/:mode', component: twit_list_component_1.TwitListComponent },
    { path: 'addAuthor', component: user_form_component_1.UserFormComponent },
    { path: 'signIn', component: signup_form_component_1.SignUpFormComponent },
    { path: '', component: change_password_form_component_1.ChangePasswordFormComponent },
    { path: 'work', component: text_finder_form_component_1.TextFinderFormComponent }
]);
//# sourceMappingURL=app.routes.js.map