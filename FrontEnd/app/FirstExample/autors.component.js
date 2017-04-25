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
var autors_service_1 = require("./autors.service");
var AutorsComponent = (function () {
    function AutorsComponent(autorsService) {
        this.title = "Autors";
        this.Autors = autorsService.getAutors();
    }
    return AutorsComponent;
}());
AutorsComponent = __decorate([
    core_1.Component({
        selector: 'Autors',
        template: "\n    <h2>Autors</h2>\n        {{title}}\n     <ul>\n        <li *ngFor=\"let autor of Autors, #i = index\">\n            {{ i + 1 }} - {{ autor }}     \n        </li> \n\n\n       \n\n     </ul>\n     ",
        providers: [autors_service_1.AutorsService]
    }),
    __metadata("design:paramtypes", [autors_service_1.AutorsService])
], AutorsComponent);
exports.AutorsComponent = AutorsComponent;
//# sourceMappingURL=autors.component.js.map