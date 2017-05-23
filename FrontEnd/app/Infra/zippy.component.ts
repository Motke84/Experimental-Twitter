import {Component,Output ,Input, EventEmitter} from '@angular/core'
import {Collapse} from '../Directives/collapse.directive'


@Component({
    selector: 'Zippy',
    templateUrl: 'app/Infra/zippy.component.html',
    styleUrls: ['app/Infra/zippy.component.css']
})

export class ZippyComponent
{
    isExpanded = false;
     @Input('icon') icon = 
     "https://image.spreadshirtmedia.com/image-server/v1/designs/1006053511,width=178,height=178/bb8.png";


    constructor() 
    { 

    }

    toggle($event)
    {
         
        this.isExpanded = !this.isExpanded;
         event.stopPropagation();
      
    }

}