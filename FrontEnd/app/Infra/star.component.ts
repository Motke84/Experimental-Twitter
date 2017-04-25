import {Component,Output ,Input, EventEmitter} from '@angular/core'


@Component({
    selector: 'Star',
  /*  template: `<div>
           <i [class]="isEmpty ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star' "
            (click)="onClick($event)" > 
          </i>
        </div> `, */

     templateUrl: 'app/Infra/star.template.html',
   styles:
   [`
        .glyphicon { color: orange;}
   `], 
    providers: [],

   // inputs:['isEmpty:Favorate']
   // Output:['change:FavorateChanged']
    
})

export class StarComponent 
{  
    @Input('Favorate') isEmpty = true;
    @Output('FavorateChanged') change = new EventEmitter();
 
    constructor() 
    {
        
    }

    onClick($event)
    {
        this.isEmpty = !this.isEmpty;
        this.change.emit({newValue: this.isEmpty});
    }

    onChange($event)
    {
       
    }
}