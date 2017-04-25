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
require("rxjs/add/operator/map");
var TextFinderFormService = (function () {
    function TextFinderFormService(http) {
        this.http = http;
        this.url = "http://localhost:60690/api/WordReplacer/";
        // url = "app/work/words.json";
        this.alternatewordsUrl = "app/work/words.alternate.json";
        this.alternateGroupUrl = "app/work/words.group.alternate.json";
    }
    TextFinderFormService.prototype.getAllText = function () {
        return this.http.get("" + this.url + "GetAllWords").
            map(function (response) { return response.json(); });
    };
    TextFinderFormService.prototype.getAlternativeWordsForWord = function (wordId) {
        return this.http.get(this.url + "GetAlternativeWords/" + wordId).
            map(function (response) { return response.json(); });
    };
    TextFinderFormService.prototype.getAlternativeWordsForGroup = function (word) {
        return this.http.get(this.url + "GetAlternativeGroupWords/" + word.Group1Id).
            map(function (response) { return response.json(); });
    };
    TextFinderFormService.prototype.saveWordOption = function (selected, optionText) {
        var op = {
            Id: selected.Id,
            Text: optionText,
            Mode: 1,
        };
        console.log(selected);
        console.log(op);
        return this.http.post(this.url + "SaveWordOption/", op).
            map(function (response) { return response.json(); });
    };
    TextFinderFormService.prototype.saveGroupOption = function (selected, optionText) {
        var op = {
            Id: selected.Group1Id,
            Text: optionText,
            Mode: 1,
        };
        console.log(selected);
        console.log(op);
        return this.http.post(this.url + "SaveGroupOption/", op).
            map(function (response) { return response.json(); });
    };
    TextFinderFormService.prototype.saveEditorOption = function (optionText) {
        var op = {
            Id: 0,
            Text: optionText,
            Mode: 1,
        };
        console.log(op);
        return this.http.post(this.url + "SaveEditorOption/", op).
            map(function (response) { return response.json(); });
    };
    return TextFinderFormService;
}());
TextFinderFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TextFinderFormService);
exports.TextFinderFormService = TextFinderFormService;
//# sourceMappingURL=text.finder.form.service.js.map