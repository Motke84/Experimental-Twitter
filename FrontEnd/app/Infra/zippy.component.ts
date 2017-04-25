import {Component,Output ,Input, EventEmitter} from '@angular/core'
import {Collapse} from '../Directives/collapse.directive'


@Component({
    selector: 'Zippy',

    template: `
    <div class="panel panel-default">
        <div class="panel-heading" (click)="toggle($event)">
           <img class="img-rounded" src= {{icon}} >
           <ng-content select=".header"></ng-content> 
            <i  class = "pull-right glyphicon"  [ngClass]= 
            "{
                'glyphicon-chevron-up' : isExpanded,
                'glyphicon-chevron-down' : !isExpanded
            
            }"  >

                </i>
        </div>
   <div [collapse] ="!isExpanded">
                <div  class="panel-body"  >
                <ng-content select=".body"></ng-content> 
                </div>
                 </div>
 
    </div>



    
    `,

    styles: 
    [` 
        i
        {
              opacity: .5;
                   margin-top: 8px;
                width: 9px;
                 vertical-align: middle;
                 display: inline-block;
        } 

        

        .panel
        {
            width: 500px;
             margin: 10px;
        }

        .img-rounded 
        {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                display: inline-block;
                margin: 1px 16px 0 3px;
                    opacity: .5;


        }

        .header
        {
           vertical-align: middle;
          
            display: inline-block;

            padding-right: 100px;
            width: 174px;
            
        }
      
      .panel-heading
      {
  cursor: pointer;
      }

    
    `],


})

 // .collapsing
 //       {
 //           height:80px; 
 //           overflow:hidden;
  //          transition:height 0.4s ease-in-out;
  //      }

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