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
var twiter_Autor_Model_1 = require("../Models/twiter.Autor.Model");
var TwitComponent = (function () {
    //  viewModeValue = ViewModeValue;
    function TwitComponent() {
        //  @Input('AutorName') autorName = 'Stam';
        //   @Input('AutorImage') autorImage = "http://lorempixel.com/100/100/people?1";
        //   @Input('AutorUser') autorUser = 'Klum';
        //   @Input('AutorComments') autorComments = 'Balablah';
        //  @Input('TotalLikes') totalLikes = 10;
        this.change = new core_1.EventEmitter();
        // @Input('ViewMode') ViewMode = 'Thumb';
        this.ViewMode = 0;
    }
    TwitComponent.prototype.LikeHasChanged = function ($event) {
        console.log(this.ViewMode);
        this.change.emit(event);
    };
    return TwitComponent;
}());
__decorate([
    core_1.Output('UserFavorateChanged'),
    __metadata("design:type", Object)
], TwitComponent.prototype, "change", void 0);
__decorate([
    core_1.Input('Data'),
    __metadata("design:type", typeof (_a = typeof twiter_Autor_Model_1.TwiterAutor !== "undefined" && twiter_Autor_Model_1.TwiterAutor) === "function" && _a || Object)
], TwitComponent.prototype, "data", void 0);
__decorate([
    core_1.Input('ViewMode'),
    __metadata("design:type", Object)
], TwitComponent.prototype, "ViewMode", void 0);
TwitComponent = __decorate([
    core_1.Component({
        selector: 'Twit',
        template: "\n    <div [ngSwitch] = \"ViewMode\">\n    <template [ngSwitchCase] =\"0\" >\n    <div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"img-rounded\" src= {{data?.AutorImage}} >\n    </a>\n \n  </div>\n  <div class=\"media-body\">\n    <Strong class=\"media-heading\">{{data?.AutorName}}</Strong>\n    <b class=\"media-heading\">@{{data?.AutorUser}}</b>\n    <div>\n      <span>{{data.AutorComments | summery:10 }}</span>\n    </div>\n    <Heart [TotalLikes] = \"data?.TotalLikes\" [Liked] = \"data?.CurrentUserLiked\" \n    (LikeChanged)=\"LikeHasChanged($event)\"></Heart>\n  </div>\n\n</div>\n  </template>\n\n  <template [ngSwitchCase] =\"1\">\n  <div class=\"col-sm-3 col-md-3 col-md-offset-0\">\n    <div class=\"thumbnail\">\n     <img class=\"img-thumbnail\" src= {{data?.AutorImage}} >\n      <div class=\"caption\">\n         <Strong class=\"media-heading\">{{data?.AutorName}}</Strong>\n        <b class=\"media-heading\">@{{data?.AutorUser}}</b>\n      <div>  \n            <span>{{data?.AutorComments | summery:15 }}</span>\n        </div>\n  \n          <Heart [TotalLikes] = \"data?.TotalLikes\" [Liked] = \"data?.CurrentUserLiked\" \n          (LikeChanged)=\"LikeHasChanged($event)\"></Heart>\n      </div>\n    </div>\n  </div>\n\n\n    </template>\n</div>",
        styles: ["\n        .img-rounded {\n                width: 100px;\n                height: 100px;\n\n        }\n\n\n        .img-thumbnail {\n                width: 200px;\n                height: 200px;\n\n        }\n\n        b {\n                color: #ccc;\n                \n        }\n\n        .span {\n                    font-size: 12px;\n                  line-height: 10px;\n                \n        }\n\n        .media {\n            margin: 10px;\n        }\n\n    \n\n   "],
    }),
    __metadata("design:paramtypes", [])
], TwitComponent);
exports.TwitComponent = TwitComponent;
var _a;
//# sourceMappingURL=twit.component.js.map