import {Component} from '@angular/core'
import {AutorsService} from './autors.service'

@Component({
    selector: 'Autors',
    template: `
    <h2>Autors</h2>
        {{title}}
     <ul>
        <li *ngFor="let autor of Autors, #i = index">
            {{ i + 1 }} - {{ autor }}     
        </li> 


       

     </ul>
     `
     // *ngFor is like this template
     // <template ngFor [ngForOf]="Autors" #autor #i = index">
     //       <li> {{ i + 1 }} - {{ autor }} </li>    
     //   </template> 
     ,



    providers: [AutorsService]
    
})

export class AutorsComponent 
{ 
    title = "Autors";
    Autors;
    constructor(autorsService : AutorsService) 
    {
        this.Autors = autorsService.getAutors();
    }
}