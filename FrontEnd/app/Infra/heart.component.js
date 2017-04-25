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
//import {CursorPointerDirective} from './cursor-pointer.directive'
var HeartComponent = (function () {
    function HeartComponent() {
        this.isFull = false;
        this.change = new core_1.EventEmitter();
        this.Likes = 0;
    }
    HeartComponent.prototype.onClick = function ($event) {
        this.isFull = !this.isFull;
        this.Likes += this.isFull ? 1 : -1;
        this.change.emit({ newValue: this.isFull });
    };
    HeartComponent.prototype.onChange = function ($event) {
    };
    return HeartComponent;
}());
__decorate([
    core_1.Input('Liked'),
    __metadata("design:type", Object)
], HeartComponent.prototype, "isFull", void 0);
__decorate([
    core_1.Output('LikeChanged'),
    __metadata("design:type", Object)
], HeartComponent.prototype, "change", void 0);
__decorate([
    core_1.Input('TotalLikes'),
    __metadata("design:type", Object)
], HeartComponent.prototype, "Likes", void 0);
HeartComponent = __decorate([
    core_1.Component({
        selector: 'Heart',
        templateUrl: 'app/Infra/heart.template.html',
        styles: ["\n        .glyphicon-heart\n        {\n            color: #ccc;\n            cursor: pointer;\n        }\n\n        .highlighted\n        {\n            color: deeppink;\n        }\n\n\n   "],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], HeartComponent);
exports.HeartComponent = HeartComponent;
//# sourceMappingURL=heart.component.js.map