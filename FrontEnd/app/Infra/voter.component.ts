import {Component,Output ,Input, EventEmitter} from '@angular/core'
//import {CursorPointerDirective} from './cursor-pointer.directive'


 export enum VoteValue
    {
        Good = 1,
        None = 0,
        Bad = -1
  }  
//style="margin:3px; "
@Component({
    selector: 'Voter',
    template: `<div [class] ="'voter'">
                <i  [class] = "'glyphicon glyphicon-menu-up voter-button'"
                    [class.highlighted]="myVote == VoteValue.Good"
                    (click)="onClickUp($event)"> 
                </i>

                <span [class] ="'voter-count'" >{{voteCount | number:'2'}} </span>

                <i  [class] = "'glyphicon glyphicon-menu-down voter-button'"
                    [class.highlighted]="myVote == VoteValue.Bad"
                    (click)="onClickDown($event)"> 
                </i>
               </div> `, 

   
   styles: 
   [`
        .voter
        {
            width: 20px;
            color: #ccc;
            text-align: center;
        }

        .voter-count
        {
            font-size: 1.2em;
        }

        .voter-button
        {
            cursor: pointer;
        }

        .highlighted
        {
            color: orange;
        }


   `], 
    providers: [],
 //   directives: [CursorPointerDirective],
    
})




export class VoterComponent 
{      
    public VoteValue = VoteValue;
   

    @Input('VoteCount') voteCount = 0 ;   
    @Input('MyVote') myVote = this.VoteValue.None;
    @Output('Vote') vote = new EventEmitter();
 

    constructor()  
    {
        
    }

    onClickUp($event)
    {
        if(this.myVote !=  this.VoteValue.Good)
        {
            ++this.voteCount;
            ++this.myVote;
            this.vote.emit({newValue: this.myVote});
        }   
    }

    onClickDown($event)
    {
        if(this.myVote !=   this.VoteValue.Bad)
        {
            --this.voteCount;
            --this.myVote;
            this.vote.emit({newValue: this.myVote});
        }   
    }

    onChange($event)
    {
       
    }
}

