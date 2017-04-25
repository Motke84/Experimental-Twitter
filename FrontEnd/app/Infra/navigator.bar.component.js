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
var NavigatorBarComponent = (function () {
    function NavigatorBarComponent() {
        this.ViewMode = 0;
        this.change = new core_1.EventEmitter();
        this.images = {
            thumbs: "https://cdn4.iconfinder.com/data/icons/proglyphs-editor/512/Thumbnails-256.png",
            twits: "http://water-tanks.org/wp-content/uploads/2014/04/black-twitter-icon.png",
            forms: "http://www.podeyfamilyandsportschiropractic.com/form.png"
        };
        this.titleObject = {
            title: "Angular 2!!!",
            funds: 102043.34,
            date: new Date(Date.now()),
        };
    }
    NavigatorBarComponent.prototype.onClickDropDown = function (event) {
        console.log(event);
    };
    NavigatorBarComponent.prototype.onClickNormal = function (event) {
        this.ViewMode = 0;
        this.change.emit({ newValue: this.ViewMode });
        //     console.log(mode);
    };
    NavigatorBarComponent.prototype.onClickThumb = function (event) {
        this.ViewMode = 1;
        this.change.emit({ newValue: this.ViewMode });
        //   console.log(mode);
    };
    NavigatorBarComponent.prototype.onClickUserForm = function (event) {
        this.ViewMode = 2;
        this.change.emit({ newValue: this.ViewMode });
        console.log(this.ViewMode);
    };
    return NavigatorBarComponent;
}());
__decorate([
    core_1.Output('ViewModeChanged'),
    __metadata("design:type", Object)
], NavigatorBarComponent.prototype, "change", void 0);
NavigatorBarComponent = __decorate([
    core_1.Component({
        selector: 'NavigatorBar',
        template: "\n <nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <div class=\"dropdown\">\n     \n  <button class=\"btn dropdown-toggle\" \n      type=\"button\" \n      data-toggle=\"dropdown\" >\n  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </button>\n  <ng-content select=\".title\"></ng-content> \n  <!-- <span>{{ titleObject.title | uppercase}} </span> \n   <span> Funds: {{ titleObject.funds | currency:'ILS':true:'2.2-2'}} </span> \n   <span> Date: {{ titleObject.date | date: 'dd MMM yyyy' }} </span> \n  <span> object: {{ titleObject | json }} </span> -->\n  <ul class=\"dropdown-menu\">\n    \n\n\n        <Zippy [icon] = \"images.twits\"> \n            <span class = \"header\" >Twiter</span> \n            <a [routerLink]= \"['twiter',0]\" (click)=\"onClickNormal(event)\" class = \"body\" >\n            Click to Normal view</a> \n        </Zippy>\n\n          <Zippy [icon] = \"images.thumbs\"> \n            <span class = \"header\" >Thumbs</span> \n            <a [routerLink]= \"['twiter',1]\" (click)=\"onClickThumb(event)\" class = \"body\" >\n            Click to Thumb view</a> \n        </Zippy>\n\n        <Zippy [icon] = \"images.forms\"> \n            <span class = \"header\" >Forms</span> \n            <a routerLink= \"addAuthor\" (click)=\"onClickUserForm(event)\" class = \"body\" >\n            Click to Forms</a> \n        </Zippy>\n\n   <!--   <li (click)=\"onClickNormal(event)\" ><a href=\"#\" >Normal</a></li>\n    <li (click)=\"onClickThumb(event)\" ><a href=\"#\"  >Thumbs</a></li>-->\n\n  </ul>\n</div>\n    </div>\n     </div>\n    </nav>\n ",
        styles: ["\n\n          .dropdown\n          {\n            margin: 10px;\n          }\n\n\n          "],
    }),
    __metadata("design:paramtypes", [])
], NavigatorBarComponent);
exports.NavigatorBarComponent = NavigatorBarComponent;
//# sourceMappingURL=Navigator.Bar.component.js.map