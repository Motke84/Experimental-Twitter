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
var twitAutors_service_1 = require("./twitAutors.service");
var router_1 = require("@angular/router");
var TwitListComponent = (function () {
    function TwitListComponent(twitAutorsService, activatedRoute) {
        this.twitAutorsService = twitAutorsService;
        this.activatedRoute = activatedRoute;
        this.TwitAutors = [];
        this.viewMode = 0;
        this.isLoading = true;
        // //  this.TwitAutors = twitAutorsService.getItems();
        //   console.log(this.TwitAutors.length);
    }
    TwitListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routesSub = this.activatedRoute.params.subscribe(function (params) {
            _this.viewMode = +params["mode"];
        });
        this.twitAutorsSub = this.twitAutorsService.loadAllAuthors().
            delay(1000).
            subscribe(function (data) {
            _this.isLoading = false;
            //  console.log(data);
            _this.TwitAutors = data;
        });
        //  this.TwitAutors = this.twitAutorsService.autors; // subscribe to entire collection
        //  console.log(this.TwitAutors);
        // load all todos
    };
    TwitListComponent.prototype.ngOnDestroy = function () {
        this.routesSub.unsubscribe();
    };
    TwitListComponent.prototype.ngAfterContentInit = function () {
        //  this.twitAutorsService.loadAll();
    };
    return TwitListComponent;
}());
__decorate([
    core_1.Input('ViewMode'),
    __metadata("design:type", Object)
], TwitListComponent.prototype, "viewMode", void 0);
TwitListComponent = __decorate([
    core_1.Component({
        selector: 'TwitList',
        template: "\n <div *ngIf = \"TwitAutors.length > 0\">\n        <div *ngFor=\"let twitAutor of TwitAutors\">           \n  <Twit [Data]=\"twitAutor\" [ViewMode] = \"viewMode\"></Twit>  \n     </div>\n        <div [hidden] = \"TwitAutors.length > 0\"> \n             Not Twits For Today!!! :-(\n        </div>\n        \n    </div>\n     <div *ngIf = \"isLoading\"> \n           <i class=\"centered fa fa-spinner fa-pulse fa-5x\">  </i> \n        </div>\n    ",
        //hidden - good for hidding small elements *ngIf- good for hidding big elements
        providers: [twitAutors_service_1.TwitAutorsService],
    }),
    __metadata("design:paramtypes", [twitAutors_service_1.TwitAutorsService,
        router_1.ActivatedRoute])
], TwitListComponent);
exports.TwitListComponent = TwitListComponent;
//# sourceMappingURL=twit-list.component.js.map