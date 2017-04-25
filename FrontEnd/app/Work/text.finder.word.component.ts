import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { word } from './word.model';
import { CustomdropdownDirective } from './drop.down.context.directive';
import { TextFinderFormService } from './text.finder.form.service'

@Component({
    selector: 'textFinderWord',
    template: `
        <span  *ngIf = "!manualMode"  class="dropdown"  appcustomdropdown>
          <span class="badge word-badge dropdown" 
           (contextmenu)="onRightClick($event)"
          (dblclick)="doDoubleClickAction($event)" 
              
          *ngIf = "word.Text != '<BR>'" 
          [style.background-color]="getColor()">{{word.Text}}</span>
          
          <div  class="word-newline"
           *ngIf = "word.Text == '<BR>'"></div>
           

            <ul class="dropdown-menu" >
          
            <li class="dropdown-header">Options</li>
                <li   *ngFor="let newWord of newWords" (click)="newChoise(newWord)" >
            <a>{{newWord}}</a></li>
              <li *ngIf = "isLoadingMenu" > <i class="word-menu-wait fa fa-spinner fa-pulse fa-1x"> </i> </li> 
         <li role="separator" class="divider"></li>
        
          <li  (click)="manualMode=true" ><a>Manual</a></li>
        
          
       
            </ul>
           
           </span>
            <span *ngIf = "manualMode" class="form-inline">
                 <a class="word-manual-save btn btn-default" (click)="editModeFinished()" >
                    <i class="fa fa-floppy-o" title="Save"></i>
                 </a>
                <input type="text" class="form-control word-manual-editor" 
                title="{{manualText}}" [(ngModel)]="manualText" />
            </span>
        <span *ngIf = "isLoading"> 
           <i class="fa fa-spinner fa-pulse fa-1x"> </i> 
        </span>
        
    `,
    styles: [`
         .word-newline
         {
             margin-bottom: 10px
         }
         .word-badge
         {
            height: 20px;
            text-align: center;
            font-size: 15px;
            border-radius: 5px;
         }

         .word-option:hover {
             background-color: lightgrey;
        }
        
        .word-manual-editor {
               width: 100px;
               margin-left: -4px;
              height: 27px;
        }

        .word-manual-save 
        {
           color: #337ab7;
        border-block-end-width: 5px;
           
          
    }
    
        .word-menu-wait
        {
            margin-left: 20px;
        }
   
}
          

    `]
})

export class TextFinderWordComponent implements OnInit {
    isExpanded = false;
    @Input('newWords') newWords = [];

    @Input('word') word: word;
    @Input('groupMode') groupMode: string = "";


    @Output('wordsChanged') wordsChanged = new EventEmitter<any>();

    manual = "Manual";
    manualMode = false;
    manualText = "";
    isLoading = false;
    isLoadingMenu = false;
    //this.change.emit({newValue: this.isEmpty});



    constructor(private textFinderFormService: TextFinderFormService) {
        this.isLoading = false;
    }

    getColor() {
        switch (this.groupMode) {
            case "": return this.word.Color;
            case "group1Id": return this.word.Group1Color;
        }
    }

    ngOnInit() {

    }

    doClickAction(word) {
        console.log("doClickAction: " + word);

    }


    editModeFinished() {
        this.isLoading = true;
        this.textFinderFormService.saveWordOption(this.word, this.manualText).
            delay(1000).
            subscribe(data => {
                console.log(data);
                this.isLoading = false;
                this.wordsChanged.emit(data);
                //    this.newWords = data;
            });
    }

    doDoubleClickAction(word) {
        this.isLoading = true;
        this.textFinderFormService.saveWordOption(this.word, "").
            delay(1000).
            subscribe(data => {
                console.log(data);
                this.isLoading = false;
                this.wordsChanged.emit(data);
                //    this.newWords = data;
            });
    }

    newChoise(newWord) {

        console.log("newChoise: " + newWord);
        console.log(this.word);
        var tmp: any = this.word;
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
                        subscribe(data => {

                            this.isLoading = false;
                            this.wordsChanged.emit(data);

                        });
                }
                break;
            case "group1Id":
                {
                    this.textFinderFormService.saveGroupOption(this.word, newWord).
                        delay(1000).
                        subscribe(data => {
                            //     console.log(data);
                            this.isLoading = false;
                            this.wordsChanged.emit(data);
                            //    this.newWords = data;
                        });
                }
                break;


            //  this.word.Text = newWord;
        }


    }

    onRightClick(event) {
        console.log("onRightClick: " + event);
        this.newWords = [];
        this.isLoadingMenu = true;
        this.manualText = this.word.Text;

        switch (this.groupMode) {
            case "":
                {
                    this.textFinderFormService.getAlternativeWordsForWord(this.word.Id).
                        delay(1000).
                        subscribe(data => {
                            this.isLoadingMenu = false;
                            //     console.log(data);
                            //       data.push(this.manual);
                            this.newWords = data;
                        });
                }
                break;
            case "group1Id":
                {
                    this.textFinderFormService.getAlternativeWordsForGroup(this.word).
                        delay(1000).
                        subscribe(data => {
                            this.isLoadingMenu = false;
                            console.log(data);
                            this.newWords = data;
                        });
                }
                break;


        }



        return false;
    }
}