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
var StarComponent = (function () {
    function StarComponent() {
        this.isEmpty = true;
        this.change = new core_1.EventEmitter();
    }
    StarComponent.prototype.onClick = function ($event) {
        this.isEmpty = !this.isEmpty;
        this.change.emit({ newValue: this.isEmpty });
    };
    StarComponent.prototype.onChange = function ($event) {
    };
    return StarComponent;
}());
__decorate([
    core_1.Input('Favorate'),
    __metadata("design:type", Object)
], StarComponent.prototype, "isEmpty", void 0);
__decorate([
    core_1.Output('FavorateChanged'),
    __metadata("design:type", Object)
], StarComponent.prototype, "change", void 0);
StarComponent = __decorate([
    core_1.Component({
        selector: 'Star',
        /*  template: `<div>
                 <i [class]="isEmpty ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star' "
                  (click)="onClick($event)" >
                </i>
              </div> `, */
        templateUrl: 'app/Infra/star.template.html',
        styles: ["\n        .glyphicon { color: orange;}\n   "],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map