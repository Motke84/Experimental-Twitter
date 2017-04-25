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
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var twit_list_component_1 = require("./Twiter/twit-list.component");
var Navigator_Bar_component_1 = require("./Infra/Navigator.Bar.component");
var main_form_component_1 = require("./Forms/main.form.component");
var heart_component_1 = require("./Infra/heart.component");
var voter_component_1 = require("./Infra/voter.component");
var zippy_component_1 = require("./Infra/zippy.component");
var collapse_directive_1 = require("./Directives/collapse.directive");
var twit_component_1 = require("./Twiter/twit.component");
var twitAutors_service_1 = require("./Twiter/twitAutors.service");
var summary_pipe_1 = require("./Infra/Pipes/summary.pipe");
var user_form_component_1 = require("./Forms/user.form.component");
var signup_form_component_1 = require("./Forms/signup-form.component");
var change_password_form_component_1 = require("./Forms/change.password.form.component");
var text_finder_component_1 = require("./Work/text.finder.component");
var app_routes_1 = require("./app.routes");
var spotify_service_1 = require("./Services/spotify.service");
var quote_service_1 = require("./Services/quote.service.");
var text_finder_form_service_1 = require("./Work/text.finder.form.service");
var text_finder_form_component_1 = require("./Work/text.finder.form.component");
var text_finder_word_component_1 = require("./Work/text.finder.word.component");
var drop_down_context_directive_1 = require("./Work/drop.down.context.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, heart_component_1.HeartComponent,
            Navigator_Bar_component_1.NavigatorBarComponent, collapse_directive_1.Collapse, drop_down_context_directive_1.CustomdropdownDirective,
            zippy_component_1.ZippyComponent, voter_component_1.VoterComponent,
            twit_list_component_1.TwitListComponent, twit_component_1.TwitComponent,
            summary_pipe_1.SummaryPipe, text_finder_component_1.TextFinderComponent,
            main_form_component_1.MainFormComponent, user_form_component_1.UserFormComponent, signup_form_component_1.SignUpFormComponent,
            change_password_form_component_1.ChangePasswordFormComponent, text_finder_word_component_1.TextFinderWordComponent, text_finder_form_component_1.TextFinderFormComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [twitAutors_service_1.TwitAutorsService, spotify_service_1.SpotifyService, quote_service_1.QuoteService, text_finder_form_service_1.TextFinderFormService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map