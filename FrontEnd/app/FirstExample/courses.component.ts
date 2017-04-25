import {Component} from '@angular/core'
import {EpisodeService} from './episode.service'

import {AutoGrowDirective} from '../Directives/auto-grow.directive'

@Component({
    selector: 'Courses',
    template: `
     <h2>Courses</h2>
        {{title}}
   
        <div> 
         
            <input type="text" 
            [value]="title" 
            (input)="title = $event.target.value"
            autoGrow /> 
            <input type="text" 
            [(ngModel)]="title" /> 
            <input type="button" (click)="title = ''" value = "clear">
        </div>
        <div>
            <img class="img-rounded" [src]="url" />
        </div>
        <div> 
            <button 
            (click)="onClick($event)"
            class ="btn btn-primary" 
            [class.active]="isActive" 
            [ngStyle] ="{
                backgroundColor: isActive ? 'green' : 'red',
                border: isActive ? '2px solid #4CAF50;' : 'none'
            }">
        <!--     [style.backgroundColor]="isActive ? 'green' : 'red'" -->
           
            Reset </button>
        </div>
         <h3>Episodes</h3> 
     <ul>
        <li *ngFor="#episode of Episodes">
            {{episode}}     
        </li> 
     </ul>
     `,
    providers: [EpisodeService],
    
})

export class CoursesComponent 
{ 
    title = "Angular 4 dummies";
    title2 = "Angular 4 dummies";
    isActive = false;
    url = "https://67.media.tumblr.com/1dfd24b7834abebf537433d080048624/tumblr_inline_o3hs91cFSX1tdw0bi_540.png";
    Episodes;
    Autors;
    constructor(episodeService: EpisodeService) 
    {
        this.Episodes = episodeService.getEpisodes();
    }

    onClick($event)
    {
        
        this.title = this.title2.toString();
        this.isActive = false;
    }

    onChange($event)
    {
        this.title = $event.target.value;
        this.isActive = true;
    }
}