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
var text_finder_form_service_1 = require("./text.finder.form.service");
var TextFinderWordComponent = (function () {
    //this.change.emit({newValue: this.isEmpty});
    function TextFinderWordComponent(textFinderFormService) {
        this.textFinderFormService = textFinderFormService;
        this.isExpanded = false;
        this.newWords = [];
        this.groupMode = "";
        this.wordsChanged = new core_1.EventEmitter();
        this.manual = "Manual";
        this.manualMode = false;
        this.manualText = "";
        this.isLoading = false;
        this.isLoadingMenu = false;
        this.isLoading = false;
    }
    TextFinderWordComponent.prototype.getColor = function () {
        switch (this.groupMode) {
            case "": return this.word.Color;
            case "group1Id": return this.word.Group1Color;
        }
    };
    TextFinderWordComponent.prototype.ngOnInit = function () {
    };
    TextFinderWordComponent.prototype.doClickAction = function (word) {
        console.log("doClickAction: " + word);
    };
    TextFinderWordComponent.prototype.editModeFinished = function () {
        var _this = this;
        this.isLoading = true;
        this.textFinderFormService.saveWordOption(this.word, this.manualText).
            delay(1000).
            subscribe(function (data) {
            console.log(data);
            _this.isLoading = false;
            _this.wordsChanged.emit(data);
            //    this.newWords = data;
        });
    };
    TextFinderWordComponent.prototype.doDoubleClickAction = function (word) {
        var _this = this;
        this.isLoading = true;
        this.textFinderFormService.saveWordOption(this.word, "").
            delay(1000).
            subscribe(function (data) {
            console.log(data);
            _this.isLoading = false;
            _this.wordsChanged.emit(data);
            //    this.newWords = data;
        });
    };
    TextFinderWordComponent.prototype.newChoise = function (newWord) {
        var _this = this;
        console.log("newChoise: " + newWord);
        console.log(this.word);
        var tmp = this.word;
        tmp.newWord = newWord;
        this.isLoading = true;
        //  this.wordsChanged.emit(tmp);
        //  if (newWord == this.manual)
        //   {
        //        this.manualMode = true;
        //        return;
        //    }
        switch (this.groupMode) {
            case "":
                {
                    this.textFinderFormService.saveWordOption(this.word, newWord).
                        delay(1000).
                        subscribe(function (data) {
                        _this.isLoading = false;
                        _this.wordsChanged.emit(data);
                    });
                }
                break;
            case "group1Id":
                {
                    this.textFinderFormService.saveGroupOption(this.word, newWord).
                        delay(1000).
                        subscribe(function (data) {
                        //     console.log(data);
                        _this.isLoading = false;
                        _this.wordsChanged.emit(data);
                        //    this.newWords = data;
                    });
                }
                break;
        }
    };
    TextFinderWordComponent.prototype.onRightClick = function (event) {
        var _this = this;
        console.log("onRightClick: " + event);
        this.newWords = [];
        this.isLoadingMenu = true;
        this.manualText = this.word.Text;
        switch (this.groupMode) {
            case "":
                {
                    this.textFinderFormService.getAlternativeWordsForWord(this.word.Id).
                        delay(1000).
                        subscribe(function (data) {
                        _this.isLoadingMenu = false;
                        //     console.log(data);
                        //       data.push(this.manual);
                        _this.newWords = data;
                    });
                }
                break;
            case "group1Id":
                {
                    this.textFinderFormService.getAlternativeWordsForGroup(this.word).
                        delay(1000).
                        subscribe(function (data) {
                        _this.isLoadingMenu = false;
                        console.log(data);
                        _this.newWords = data;
                    });
                }
                break;
        }
        return false;
    };
    return TextFinderWordComponent;
}());
__decorate([
    core_1.Input('newWords'),
    __metadata("design:type", Object)
], TextFinderWordComponent.prototype, "newWords", void 0);
__decorate([
    core_1.Input('word'),
    __metadata("design:type", Object)
], TextFinderWordComponent.prototype, "word", void 0);
__decorate([
    core_1.Input('groupMode'),
    __metadata("design:type", String)
], TextFinderWordComponent.prototype, "groupMode", void 0);
__decorate([
    core_1.Output('wordsChanged'),
    __metadata("design:type", Object)
], TextFinderWordComponent.prototype, "wordsChanged", void 0);
TextFinderWordComponent = __decorate([
    core_1.Component({
        selector: 'textFinderWord',
        template: "\n        <span  *ngIf = \"!manualMode\"  class=\"dropdown\"  appcustomdropdown>\n          <span class=\"badge word-badge dropdown\" \n           (contextmenu)=\"onRightClick($event)\"\n          (dblclick)=\"doDoubleClickAction($event)\" \n              \n          *ngIf = \"word.Text != '<BR>'\" \n          [style.background-color]=\"getColor()\">{{word.Text}}</span>\n          \n          <div  class=\"word-newline\"\n           *ngIf = \"word.Text == '<BR>'\"></div>\n           \n\n            <ul class=\"dropdown-menu\" >\n          \n            <li class=\"dropdown-header\">Options</li>\n                <li   *ngFor=\"let newWord of newWords\" (click)=\"newChoise(newWord)\" >\n            <a>{{newWord}}</a></li>\n              <li *ngIf = \"isLoadingMenu\" > <i class=\"word-menu-wait fa fa-spinner fa-pulse fa-1x\"> </i> </li> \n         <li role=\"separator\" class=\"divider\"></li>\n        \n          <li  (click)=\"manualMode=true\" ><a>Manual</a></li>\n        \n          \n       \n            </ul>\n           \n           </span>\n            <span *ngIf = \"manualMode\" class=\"form-inline\">\n                 <a class=\"word-manual-save btn btn-default\" (click)=\"editModeFinished()\" >\n                    <i class=\"fa fa-floppy-o\" title=\"Save\"></i>\n                 </a>\n                <input type=\"text\" class=\"form-control word-manual-editor\" \n                title=\"{{manualText}}\" [(ngModel)]=\"manualText\" />\n            </span>\n        <span *ngIf = \"isLoading\"> \n           <i class=\"fa fa-spinner fa-pulse fa-1x\"> </i> \n        </span>\n        \n    ",
        styles: ["\n         .word-newline\n         {\n             margin-bottom: 10px\n         }\n         .word-badge\n         {\n            height: 20px;\n            text-align: center;\n            font-size: 15px;\n            border-radius: 5px;\n         }\n\n         .word-option:hover {\n             background-color: lightgrey;\n        }\n        \n        .word-manual-editor {\n               width: 100px;\n               margin-left: -4px;\n              height: 27px;\n        }\n\n        .word-manual-save \n        {\n           color: #337ab7;\n        border-block-end-width: 5px;\n           \n          \n    }\n    \n        .word-menu-wait\n        {\n            margin-left: 20px;\n        }\n   \n}\n          \n\n    "]
    }),
    __metadata("design:paramtypes", [text_finder_form_service_1.TextFinderFormService])
], TextFinderWordComponent);
exports.TextFinderWordComponent = TextFinderWordComponent;
//# sourceMappingURL=text.finder.word.component.js.map