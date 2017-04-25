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
var text_finder_form_service_1 = require("./text.finder.form.service");
var TextFinderFormComponent = (function () {
    function TextFinderFormComponent(formBuilder, textFinderFormService) {
        this.formBuilder = formBuilder;
        this.textFinderFormService = textFinderFormService;
        this.groupModeColor = "";
        this.editMode = false;
    }
    TextFinderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.allWordsSub = this.textFinderFormService.getAllText().
            delay(1000).
            subscribe(function (data) {
            _this.isLoading = false;
            console.log(data);
            _this.allWords = data;
            //this.newWords = data.filter(e => e.text != "<BR>").map(e => e.text);
        });
        this.replacerForm = this.formBuilder.group({
            editor: ['', []],
        });
    };
    TextFinderFormComponent.prototype.reload = function (item) {
        this.allWords = item;
    };
    TextFinderFormComponent.prototype.handleKeyboardDownEvent = function (event) {
        var key = event.key;
        if (key == "Control")
            this.groupModeColor = "group1Id";
        console.log(key);
    };
    TextFinderFormComponent.prototype.handleKeyboardUpEvent = function (event) {
        var key = event.key;
        this.groupModeColor = "";
        console.log(key);
    };
    TextFinderFormComponent.prototype.changeMode = function () {
        var _this = this;
        this.editMode = !this.editMode;
        this.text = "";
        this.allWords.forEach(function (e) {
            if (e.Text != "<BR>")
                _this.text += e.Text + " ";
            else
                _this.text += ' \r\n ';
        });
    };
    TextFinderFormComponent.prototype.saveText = function () {
        var _this = this;
        this.isLoading = true;
        this.textFinderFormService.saveEditorOption(this.text).
            delay(1000).
            subscribe(function (data) {
            _this.isLoading = false;
            _this.editMode = false;
            console.log(data);
            _this.allWords = data;
            //this.newWords = data.filter(e => e.text != "<BR>").map(e => e.text);
        });
    };
    return TextFinderFormComponent;
}());
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TextFinderFormComponent.prototype, "handleKeyboardDownEvent", null);
__decorate([
    core_1.HostListener('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TextFinderFormComponent.prototype, "handleKeyboardUpEvent", null);
TextFinderFormComponent = __decorate([
    core_1.Component({
        selector: 'Text-Finder-Form',
        templateUrl: 'app/Work/text.finder.form.component.html',
        styleUrls: ['app/Work/text.finder.form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        text_finder_form_service_1.TextFinderFormService])
], TextFinderFormComponent);
exports.TextFinderFormComponent = TextFinderFormComponent;
//# sourceMappingURL=text.finder.form.component.js.map