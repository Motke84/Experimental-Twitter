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
var VoteValue;
(function (VoteValue) {
    VoteValue[VoteValue["Good"] = 1] = "Good";
    VoteValue[VoteValue["None"] = 0] = "None";
    VoteValue[VoteValue["Bad"] = -1] = "Bad";
})(VoteValue = exports.VoteValue || (exports.VoteValue = {}));
//style="margin:3px; "
var VoterComponent = (function () {
    function VoterComponent() {
        this.VoteValue = VoteValue;
        this.voteCount = 0;
        this.myVote = this.VoteValue.None;
        this.vote = new core_1.EventEmitter();
    }
    VoterComponent.prototype.onClickUp = function ($event) {
        if (this.myVote != this.VoteValue.Good) {
            ++this.voteCount;
            ++this.myVote;
            this.vote.emit({ newValue: this.myVote });
        }
    };
    VoterComponent.prototype.onClickDown = function ($event) {
        if (this.myVote != this.VoteValue.Bad) {
            --this.voteCount;
            --this.myVote;
            this.vote.emit({ newValue: this.myVote });
        }
    };
    VoterComponent.prototype.onChange = function ($event) {
    };
    return VoterComponent;
}());
__decorate([
    core_1.Input('VoteCount'),
    __metadata("design:type", Object)
], VoterComponent.prototype, "voteCount", void 0);
__decorate([
    core_1.Input('MyVote'),
    __metadata("design:type", Object)
], VoterComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output('Vote'),
    __metadata("design:type", Object)
], VoterComponent.prototype, "vote", void 0);
VoterComponent = __decorate([
    core_1.Component({
        selector: 'Voter',
        template: "<div [class] =\"'voter'\">\n                <i  [class] = \"'glyphicon glyphicon-menu-up voter-button'\"\n                    [class.highlighted]=\"myVote == VoteValue.Good\"\n                    (click)=\"onClickUp($event)\"> \n                </i>\n\n                <span [class] =\"'voter-count'\" >{{voteCount | number:'2'}} </span>\n\n                <i  [class] = \"'glyphicon glyphicon-menu-down voter-button'\"\n                    [class.highlighted]=\"myVote == VoteValue.Bad\"\n                    (click)=\"onClickDown($event)\"> \n                </i>\n               </div> ",
        styles: ["\n        .voter\n        {\n            width: 20px;\n            color: #ccc;\n            text-align: center;\n        }\n\n        .voter-count\n        {\n            font-size: 1.2em;\n        }\n\n        .voter-button\n        {\n            cursor: pointer;\n        }\n\n        .highlighted\n        {\n            color: orange;\n        }\n\n\n   "],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], VoterComponent);
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map