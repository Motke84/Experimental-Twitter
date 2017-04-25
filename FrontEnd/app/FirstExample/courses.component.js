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
var episode_service_1 = require("./episode.service");
var CoursesComponent = (function () {
    function CoursesComponent(episodeService) {
        this.title = "Angular 4 dummies";
        this.title2 = "Angular 4 dummies";
        this.isActive = false;
        this.url = "https://67.media.tumblr.com/1dfd24b7834abebf537433d080048624/tumblr_inline_o3hs91cFSX1tdw0bi_540.png";
        this.Episodes = episodeService.getEpisodes();
    }
    CoursesComponent.prototype.onClick = function ($event) {
        this.title = this.title2.toString();
        this.isActive = false;
    };
    CoursesComponent.prototype.onChange = function ($event) {
        this.title = $event.target.value;
        this.isActive = true;
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'Courses',
        template: "\n     <h2>Courses</h2>\n        {{title}}\n   \n        <div> \n         \n            <input type=\"text\" \n            [value]=\"title\" \n            (input)=\"title = $event.target.value\"\n            autoGrow /> \n            <input type=\"text\" \n            [(ngModel)]=\"title\" /> \n            <input type=\"button\" (click)=\"title = ''\" value = \"clear\">\n        </div>\n        <div>\n            <img class=\"img-rounded\" [src]=\"url\" />\n        </div>\n        <div> \n            <button \n            (click)=\"onClick($event)\"\n            class =\"btn btn-primary\" \n            [class.active]=\"isActive\" \n            [ngStyle] =\"{\n                backgroundColor: isActive ? 'green' : 'red',\n                border: isActive ? '2px solid #4CAF50;' : 'none'\n            }\">\n        <!--     [style.backgroundColor]=\"isActive ? 'green' : 'red'\" -->\n           \n            Reset </button>\n        </div>\n         <h3>Episodes</h3> \n     <ul>\n        <li *ngFor=\"#episode of Episodes\">\n            {{episode}}     \n        </li> \n     </ul>\n     ",
        providers: [episode_service_1.EpisodeService],
    }),
    __metadata("design:paramtypes", [episode_service_1.EpisodeService])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map