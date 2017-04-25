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
var MainFormComponent = (function () {
    function MainFormComponent() {
        this.ViewMode = 0;
    }
    return MainFormComponent;
}());
__decorate([
    core_1.Input('ViewMode'),
    __metadata("design:type", Object)
], MainFormComponent.prototype, "ViewMode", void 0);
MainFormComponent = __decorate([
    core_1.Component({
        selector: 'Main-Form',
        template: "\n    <div class=\"panel\" [ngSwitch] = \"ViewMode\">\n    <template [ngSwitchCase] =\"2\">\n          <User-Form > </User-Form>\n    </template>\n\n\n   </div>\n\n    ",
        styles: ["\n        .panel\n        {\n            margin-left: 10px;\n        }\n\n\n    "],
    }),
    __metadata("design:paramtypes", [])
], MainFormComponent);
exports.MainFormComponent = MainFormComponent;
//# sourceMappingURL=main.form.component.js.map