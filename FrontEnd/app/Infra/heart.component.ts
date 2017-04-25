import {Component,Output ,Input, EventEmitter} from '@angular/core'
//import {CursorPointerDirective} from './cursor-pointer.directive'

@Component({
    selector: 'Heart',

   templateUrl: 'app/Infra/heart.template.html',
   styles: 
   [`
        .glyphicon-heart
        {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted
        {
            color: deeppink;
        }


   `], 
    providers: [],
 //   directives: [CursorPointerDirective],
    
})

export class HeartComponent 
{  
    @Input('Liked') isFull= false;
    @Output('LikeChanged') change = new EventEmitter();
    @Input('TotalLikes') Likes = 0 ;

    constructor()  
    {
        
    }

    onClick($event)
    {
        this.isFull = !this.isFull;

        this.Likes += this.isFull ? 1: -1;

        this.change.emit({newValue: this.isFull});
    }

    onChange($event)
    {
       
    }
}