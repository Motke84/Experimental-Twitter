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
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
var TextFinderComponent = (function () {
    function TextFinderComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.text = 'Hello to you all';
        this.NewWords = ['Bye', 'Greetings', 'Presents', 'Oops'];
        this.start = 0;
        this.end = 0;
        this.textSplited = this.text.split(' ');
    }
    TextFinderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.replacerForm = this.formBuilder.group({
            menuitems: ['', []],
        });
        var click = Rx_1.Observable.fromEvent($("#menuitems"), "click").
            map(function (event) { return _this.getTextSelection(event); }).
            map(function (selection) {
            $("#dropMenu").hide();
            return {
                newWords: _this.NewWords,
                selection: selection,
                event: selection.event,
            };
        });
        click.subscribe(function (data) {
            var tmp = $("#menuitems")[0];
            console.log(tmp);
            if (tmp.selectionStart !=
                tmp.selectionEnd) {
                $("#dropMenu").show();
                $("#dropMenu").css({ 'top': data.event.offsetY, 'left': data.event.offsetX });
            }
            else {
                $("#dropMenu").hide();
            }
            console.log(data);
        });
        /*
                $('#menuitems').on('click', function (e)
                {
                    if (window.getSelection && window.getSelection().toString().length > 0)
                    {
                        var bodyOffsets = document.body.getBoundingClientRect();
                        var tempX = e.pageX - bodyOffsets.left - 15;
                        var tempY = 15;
                        
                        console.log(bodyOffsets);
                        console.log(e);
                        console.log("e.pageX " + e.pageX);
                        console.log("e.pageY " + e.pageY);
                        console.log("X "+tempX);
                        console.log("Y "+tempY);
                        $("#dropMenu").show();
                        $("#dropMenu").css({ 'top': e.offsetY, 'left': e.offsetX });
                    }
                    else
                    {
                          console.log("hide");
                         $("#dropMenu").hide();
                    }
                });*/
    };
    TextFinderComponent.prototype.getTextSelection = function ($event) {
        var el = $event.target;
        var normalizedValue, range, textInputRange, len, endRange, wordIndex = 0;
        this.start = 0;
        this.end = 0;
        console.clear();
        console.log("moti");
        this.start = el.selectionStart;
        this.end = el.selectionEnd;
        this.subText = this.text.substring(0, this.start);
        wordIndex = this.subText.split(' ').length;
        console.log("full text: " + (this.text));
        console.log("start :" + this.start + " End :" + this.end);
        console.log("word is: " + (window.getSelection()));
        console.log("word number is: " + (wordIndex));
        return {
            start: this.start,
            end: this.end,
            subText: window.getSelection().toString(),
            event: $event,
            showMenu: this.start != this.end,
        };
    };
    TextFinderComponent.prototype.change = function ($event) {
        this.text = $event;
        console.log("full text2: " + (this.text));
    };
    TextFinderComponent.prototype.newChoise = function (word) {
        if (this.start > 0 && this.end > 0)
            var selected = this.text.slice(this.start, this.end);
        console.log(selected);
        this.text = this.text.substr(0, this.start) + " " + word + " " +
            this.text.substr(this.end + 1);
        this.start = -1;
        this.end = -1;
        $("#dropMenu").hide();
    };
    return TextFinderComponent;
}());
TextFinderComponent = __decorate([
    core_1.Component({
        selector: 'Text-Finder',
        templateUrl: 'app/Work/text.finder.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], TextFinderComponent);
exports.TextFinderComponent = TextFinderComponent;
//# sourceMappingURL=text.finder.component.js.map