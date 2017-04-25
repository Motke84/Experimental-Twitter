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
var TextReplacerComponent = (function () {
    function TextReplacerComponent() {
        this.NewWords = ['a1', 'a2', 'a3'];
        this.text = 'Hello to you all';
        this.textSplited = this.text.split(' ');
    }
    TextReplacerComponent.prototype.ngOnInit = function () {
        $('#menuitems').on('click', function (e) {
            this.setposition(e);
        });
    };
    TextReplacerComponent.prototype.setposition = function (e) {
        var bodyOffsets = document.body.getBoundingClientRect();
        var tempX = e.pageX - bodyOffsets.left;
        var tempY = e.pageY;
        console.log(tempX);
        $("#xxx").css({ 'top': tempY, 'left': tempX });
    };
    TextReplacerComponent.prototype.toggle = function (word) {
        console.log(word);
    };
    return TextReplacerComponent;
}());
TextReplacerComponent = __decorate([
    core_1.Component({
        selector: 'Text-Replacer',
        template: "\n\n    <div class=\"dropdown\">\n   <div id=\"menuitems\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n   Menu\n   </div>\n\n   <ul class=\"dropdown-menu\" id=\"xxx\" role=\"menu\" aria-labelledby=\"menuitems\">\n       <a  *ngFor=\"let word of NewWords\"  (click)=\"toggle(word)\">\n            {{word}}\n         </a>\n   </ul>\n</div>\n\n\n       \n\n         \n    "
    }),
    __metadata("design:paramtypes", [])
], TextReplacerComponent);
exports.TextReplacerComponent = TextReplacerComponent;
//# sourceMappingURL=text.finder.replacer.component.js.map