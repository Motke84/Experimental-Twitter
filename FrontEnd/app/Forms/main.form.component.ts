import {Component,Output ,Input, EventEmitter} from '@angular/core'



@Component({
    selector: 'Main-Form',
    template:
    `
    <div class="panel" [ngSwitch] = "ViewMode">
    <template [ngSwitchCase] ="2">
          <User-Form > </User-Form>
    </template>


   </div>

    `,

  

    styles: 
    [`
        .panel
        {
            margin-left: 10px;
        }


    `],
})


export class MainFormComponent 
{
     @Input('ViewMode') ViewMode = 0;

    constructor() 
    { 

    }


}