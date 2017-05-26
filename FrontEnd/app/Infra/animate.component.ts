import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'animation-comp',
    templateUrl: 'app/Infra/animate.component.html',
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

        .stam
        {
            background-color: #369;   
            width: 100px;
            height: 100px;
        }


   `],
    animations: [
        trigger('divState', [
           state('no', style({
                transform: 'scale(1.0)'
         

            })),
            state('yes', style({
                transform: 'scale(0.8)'
              
            })),
            transition('no => yes', animate(2000)),
            transition('yes => no', animate(2000)),     
        ])
    ]
})

export class AnimationameComponent implements OnInit {

    ngOnInit(): void {

    }
    @Input('Liked') isFull = false;
    @Output('LikeChanged') change = new EventEmitter();
    @Input('TotalLikes') Likes = 0;
    anim = 'no';

    constructor() {

    }

    onClick($event) {

        this.anim = 'yes';
        
        this.isFull = !this.isFull;

        this.Likes += this.isFull ? 1 : -1;

        this.change.emit({ newValue: this.isFull });
     //    this.state = 'normal';

      setTimeout(() => {
            this.anim = 'no';
            setTimeout(() => {
            this.anim = 'yes';
                setTimeout(() => this.anim = 'no', 100);
            }, 100);
        }, 100);

    }

    onChange($event) {

    }
}