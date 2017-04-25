import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core'
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import { CustomdropdownDirective } from './drop.down.context.directive';
declare let $: any;

@Component({
    selector: 'Text-Finder',
    templateUrl: 'app/Work/text.finder.component.html',
   

})


export class TextFinderComponent implements OnInit {
    text = 'Hello to you all'
    NewWords = ['Bye', 'Greetings', 'Presents', 'Oops'];
    textSplited;
    subText;
    start = 0;
    end = 0;
    replacerForm: FormGroup

    constructor(private formBuilder: FormBuilder) {
        this.textSplited = this.text.split(' ');
    }

    ngOnInit() {
        this.replacerForm = this.formBuilder.group({
            menuitems: ['', []],
        })

        var click = Observable.fromEvent($("#menuitems"), "click").

            map(event => this.getTextSelection(event)).
            map(selection => {
                $("#dropMenu").hide();
                return {
                    newWords: this.NewWords,
                    selection: selection,
                    event: selection.event,
                };

            });

        click.subscribe(data => {
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
    }





    getTextSelection($event) {

        var el = $event.target;
        var normalizedValue, range,
            textInputRange, len, endRange, wordIndex = 0;

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
            showMenu: 
            this.start != this.end,
        };
    }

    change($event) {
        this.text = $event;
        console.log("full text2: " + (this.text));
    }

    newChoise(word) {

        if (this.start > 0 && this.end > 0)
            var selected = this.text.slice(this.start, this.end);
                  console.log(selected);
      

        this.text =  this.text.substr(0,this.start) +" "+ word +" "+
             this.text.substr(this.end+1);

        this.start = -1;
        this.end = -1;
        $("#dropMenu").hide();
    }
}

