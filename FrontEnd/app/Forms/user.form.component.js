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
var twitAutors_service_1 = require("../Twiter/twitAutors.service");
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
var spotify_service_1 = require("../Services/spotify.service");
var quote_service_1 = require("../Services/quote.service.");
var UserFormComponent = (function () {
    function UserFormComponent(twitAutorsService, spotifyService, quoteService, formBuilder) {
        this.twitAutorsService = twitAutorsService;
        this.spotifyService = spotifyService;
        this.quoteService = quoteService;
        this.formBuilder = formBuilder;
        this.frequencies = [
            { id: 1, label: 'Daily' },
            { id: 2, label: 'Weekly' },
            { id: 3, label: 'Monthly' }
        ];
        this.isCollapsed = true;
        this.twitAutorsService = twitAutorsService;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            autorUser: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)
                ])],
            autorName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)
                ])],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^[a-z0-9!#$%&*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$')
                ])],
            autorImage: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            autorComments: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            frequency: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
        //autorImage   autorComments
        this.subscribeToEvent();
    };
    UserFormComponent.prototype.suggestionClick = function (item) {
        this.spotify = item;
        var images = item["images"];
        var userPhoto = images.length > 0 ?
            images[0]["url"] : '';
        this.userForm.controls['autorName'].setValue(item["name"]);
        this.userForm.controls['autorImage'].setValue(userPhoto);
        console.log(item);
        console.log(this.userForm.value);
    };
    UserFormComponent.prototype.subscribeToEvent = function () {
        var _this = this;
        // debugger;
        console.log($("#autorName"));
        var keyups = Rx_1.Observable.fromEvent($("#autorName"), "keyup").
            map(function (e) { return e.target.value; }).
            filter(function (text) { return text.length >= 3; }).
            debounceTime(100).
            distinctUntilChanged().
            flatMap(function (searchItem) { return _this.spotifyService.searchArtists(searchItem); });
        this.subscribe = keyups.subscribe(function (data) {
            console.log(data);
            // console.log((<any>data).artists.items);
            _this.dataForComplition = data.artists.items.
                filter(function (e) { return e.images != null &&
                e.images.length > 0; });
            //  console.log(this.dataForComplition);
            _this.isCollapsed = _this.dataForComplition > 0;
        });
        console.log($("#generate"));
        var click = Rx_1.Observable.fromEvent($("#generate"), "change").
            map(function (e) { return e.target.checked; }).
            //  filter(e => e == true).
            flatMap(function (value) { return value ? _this.quoteService.getQuote() : Rx_1.Observable.empty(); });
        console.log(click);
        this.subscribe2 = click.subscribe(function (data) {
            var tmp = data;
            console.log(tmp);
            if (tmp)
                _this.userForm.controls['autorComments'].setValue(tmp.value.joke);
            else
                _this.userForm.controls['autorComments'].setValue(' ');
        });
    };
    UserFormComponent.prototype.addUser = function () {
        if (this.userForm.valid) {
            console.log(this.userForm.value);
            this.userForm.value['TotalLikes'] = this.spotify["popularity"];
            this.twitAutorsService.create(this.userForm.value);
            this.userForm.reset();
        }
    };
    UserFormComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'User-Form',
        templateUrl: 'app/Forms/user.form.component.html',
        styles: [" \n        .img-rounded {\n                width: 100px;\n                height: 100px;\n\n        }\n        .form {\n           margin: 10px;\n        }\n\n        .form-control\n        {\n            width: 400px;\n        }\n\n        .alert\n        {\n          width: 440px;\n        }\n\n        .scrollable-menu {\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n}\n   \n\n   "],
    }),
    __metadata("design:paramtypes", [twitAutors_service_1.TwitAutorsService,
        spotify_service_1.SpotifyService,
        quote_service_1.QuoteService,
        forms_1.FormBuilder])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user.form.component.js.map