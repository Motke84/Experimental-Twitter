import { Component, Output, Input, EventEmitter, OnInit, HostListener } from '@angular/core'
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import { word } from './word.model';
import { TextFinderFormService } from './text.finder.form.service'
import { TextFinderWordComponent } from './text.finder.word.component'
import { CustomdropdownDirective } from './drop.down.context.directive';

declare let $: any;

@Component({
    selector: 'Text-Finder-Form',
    templateUrl: 'app/Work/text.finder.form.component.html',
    styleUrls: ['app/Work/text.finder.form.component.css']
})


export class TextFinderFormComponent implements OnInit {
    isLoading: boolean;
    allWordsSub;
    replacerForm: FormGroup;
    allWords: word[];
    newWords: string[];
    groupModeColor = "";
    editMode = false;
    text: string;

    constructor(private formBuilder: FormBuilder,
        private textFinderFormService: TextFinderFormService) {


    }

    ngOnInit() {
        this.isLoading = true;
        this.allWordsSub = this.textFinderFormService.getAllText().
            delay(1000).
            subscribe(data => {
                this.isLoading = false;
                console.log(data);
                this.allWords = data;
                //this.newWords = data.filter(e => e.text != "<BR>").map(e => e.text);

            });

        this.replacerForm = this.formBuilder.group({
            editor: ['', []],
        });
    }

    reload(item) {
        this.allWords = item;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardDownEvent(event: KeyboardEvent) {
        var key = event.key;

        if (key == "Control")
            this.groupModeColor = "group1Id";

        console.log(key);

    }

    @HostListener('document:keyup', ['$event'])
    handleKeyboardUpEvent(event: KeyboardEvent) {
        var key = event.key;


        this.groupModeColor = "";
        console.log(key);

    }

    changeMode() {
        this.editMode = !this.editMode;
        this.text = "";
        this.allWords.forEach(e => {
            if (e.Text != "<BR>")
                this.text += e.Text + " ";
            else
                this.text += ' \r\n ';
        })
    }

    saveText()
    {
  this.isLoading = true;
        this.textFinderFormService.saveEditorOption(this.text).
            delay(1000).
            subscribe(data => {
                this.isLoading = false;
                 this.editMode = false;
                console.log(data);

                this.allWords = data;
                //this.newWords = data.filter(e => e.text != "<BR>").map(e => e.text);

            });
    }
}


