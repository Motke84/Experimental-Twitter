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
var CustomdropdownDirective = (function () {
    function CustomdropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(CustomdropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    CustomdropdownDirective.prototype.open = function (event) {
        this.isOpen = true;
        return false;
    };
    CustomdropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    CustomdropdownDirective.prototype.closeOnChoise = function () {
        this.isOpen = false;
    };
    return CustomdropdownDirective;
}());
__decorate([
    core_1.HostBinding('class.open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], CustomdropdownDirective.prototype, "opened", null);
__decorate([
    core_1.HostListener('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomdropdownDirective.prototype, "open", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomdropdownDirective.prototype, "close", null);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomdropdownDirective.prototype, "closeOnChoise", null);
CustomdropdownDirective = __decorate([
    core_1.Directive({
        selector: '[appcustomdropdown]'
    }),
    __metadata("design:paramtypes", [])
], CustomdropdownDirective);
exports.CustomdropdownDirective = CustomdropdownDirective;
//# sourceMappingURL=drop.down.context.directive.js.map