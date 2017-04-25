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
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
var TwitAutorsService = (function () {
    function TwitAutorsService(http) {
        this.http = http;
        // public autors : Observable<TwiterAutor[]>
        this.autorsUrl2 = 'http://588e065bf30c7212004f2c8a.mockapi.io/twiterAutors';
        this.autorsUrl = 'http://localhost:49882/api/Twiter';
        this.dataStore = { autors: [] };
        this._autors = new BehaviorSubject_1.BehaviorSubject([]);
        this.autors = this._autors.asObservable();
    }
    TwitAutorsService.prototype.loadAll = function () {
        var _this = this;
        this.http.get(this.autorsUrl + "/GetAllTwits").
            debounceTime(300).
            map(function (response) {
            console.log(response.json());
            return response.json();
        }).
            subscribe(function (data) {
            _this.dataStore.autors = data;
            _this._autors.next(Object.assign({}, _this.dataStore).autors);
        }, function (error) { return console.log('Could not load autors.'); });
    };
    TwitAutorsService.prototype.loadAllAuthors = function () {
        return this.http.get(this.autorsUrl + "/GetAllTwits").
            map(function (response) { return response.json(); });
    };
    TwitAutorsService.prototype.create = function (twiterAutor) {
        var _this = this;
        this.http.post(this.autorsUrl + "/AddTwit", twiterAutor)
            .map(function (response) { return response.json(); }).
            subscribe(function (data) {
            _this.dataStore.autors.push(data);
            _this._autors.next(Object.assign({}, _this.dataStore).autors);
        }, function (error) { return console.log('Could not create autors.'); });
    };
    return TwitAutorsService;
}());
TwitAutorsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TwitAutorsService);
exports.TwitAutorsService = TwitAutorsService;
//# sourceMappingURL=twitAutors.service.js.map