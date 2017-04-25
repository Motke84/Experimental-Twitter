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
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.isExpanded = false;
        this.icon = "https://image.spreadshirtmedia.com/image-server/v1/designs/1006053511,width=178,height=178/bb8.png";
    }
    ZippyComponent.prototype.toggle = function ($event) {
        this.isExpanded = !this.isExpanded;
        event.stopPropagation();
    };
    return ZippyComponent;
}());
__decorate([
    core_1.Input('icon'),
    __metadata("design:type", Object)
], ZippyComponent.prototype, "icon", void 0);
ZippyComponent = __decorate([
    core_1.Component({
        selector: 'Zippy',
        template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" (click)=\"toggle($event)\">\n           <img class=\"img-rounded\" src= {{icon}} >\n           <ng-content select=\".header\"></ng-content> \n            <i  class = \"pull-right glyphicon\"  [ngClass]= \n            \"{\n                'glyphicon-chevron-up' : isExpanded,\n                'glyphicon-chevron-down' : !isExpanded\n            \n            }\"  >\n\n                </i>\n        </div>\n   <div [collapse] =\"!isExpanded\">\n                <div  class=\"panel-body\"  >\n                <ng-content select=\".body\"></ng-content> \n                </div>\n                 </div>\n \n    </div>\n\n\n\n    \n    ",
        styles: [" \n        i\n        {\n              opacity: .5;\n                   margin-top: 8px;\n                width: 9px;\n                 vertical-align: middle;\n                 display: inline-block;\n        } \n\n        \n\n        .panel\n        {\n            width: 500px;\n             margin: 10px;\n        }\n\n        .img-rounded \n        {\n                width: 30px;\n                height: 30px;\n                vertical-align: middle;\n                display: inline-block;\n                margin: 1px 16px 0 3px;\n                    opacity: .5;\n\n\n        }\n\n        .header\n        {\n           vertical-align: middle;\n          \n            display: inline-block;\n\n            padding-right: 100px;\n            width: 174px;\n            \n        }\n      \n      .panel-heading\n      {\n  cursor: pointer;\n      }\n\n    \n    "],
    }),
    __metadata("design:paramtypes", [])
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map