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
var AppComponent = (function () {
    function AppComponent() {
        this.titleObject = {
            title: "Angular 2!!!",
            funds: 102043.34,
            date: new Date(Date.now())
        };
        this.viewMode = 1;
    }
    //   postStar = { isEmpty: false , totalLikes: 50 , liked: true };
    //  postHeart = { isEmpty: false , totalLikes: 50  };
    // postVote = { voteCount: 112 , userVote: VoteValue.Good};
    /*
       FavorateHasChanged($event)
       {
         
         console.log($event);
       }
    
       TotalLikesHasChanged($event)
       {
         console.log($event);
       }
       */
    AppComponent.prototype.ModeChanged = function (newValue) {
        this.viewMode = newValue.newValue;
        console.log(this.viewMode);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n \n        <NavigatorBar (ViewModeChanged) = \"ModeChanged($event)\">\n      <span class = \"title\" >Angular 2!!!</span> \n      </NavigatorBar>\n   \n  <router-outlet> </router-outlet>\n     \n       \n      \n      ",
        styles: [" "],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map