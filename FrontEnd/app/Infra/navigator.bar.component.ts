import { Component, Output, Input, EventEmitter } from '@angular/core'
//import {ViewModeValue} from './enums';
import { ZippyComponent } from './zippy.component';
import { Collapse } from '../Directives/collapse.directive';



@Component({
    selector: 'NavigatorBar',

    template: `
 <nav class="navbar navbar-default navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <div class="dropdown">
     
  <button class="btn dropdown-toggle" 
      type="button" 
      data-toggle="dropdown" >
  <span class="glyphicon glyphicon-menu-hamburger"></span>
  </button>
  <ng-content select=".title"></ng-content> 
  <!-- <span>{{ titleObject.title | uppercase}} </span> 
   <span> Funds: {{ titleObject.funds | currency:'ILS':true:'2.2-2'}} </span> 
   <span> Date: {{ titleObject.date | date: 'dd MMM yyyy' }} </span> 
  <span> object: {{ titleObject | json }} </span> -->
  <ul class="dropdown-menu">
    


        <Zippy [icon] = "images.twits"> 
            <span class = "header" >Twiter</span> 
            <a [routerLink]= "['twiter',0]" (click)="onClickNormal(event)" class = "body" >
            Click to Normal view</a> 
        </Zippy>

          <Zippy [icon] = "images.thumbs"> 
            <span class = "header" >Thumbs</span> 
            <a [routerLink]= "['twiter',1]" (click)="onClickThumb(event)" class = "body" >
            Click to Thumb view</a> 
        </Zippy>

        <Zippy [icon] = "images.forms"> 
            <span class = "header" >Forms</span> 
            <a routerLink= "addAuthor" (click)="onClickUserForm(event)" class = "body" >
            Click to Forms</a> 
        </Zippy>

   <!--   <li (click)="onClickNormal(event)" ><a href="#" >Normal</a></li>
    <li (click)="onClickThumb(event)" ><a href="#"  >Thumbs</a></li>-->

  </ul>
</div>
    </div>
     </div>
    </nav>
 `,
    styles: [`

          .dropdown
          {
            margin: 10px;
          }


          `],

})



export class NavigatorBarComponent {
    ViewMode = 0;
    @Output('ViewModeChanged') change = new EventEmitter();

    images = {
        thumbs: "https://cdn4.iconfinder.com/data/icons/proglyphs-editor/512/Thumbnails-256.png",
        twits: "http://water-tanks.org/wp-content/uploads/2014/04/black-twitter-icon.png",
        forms: "http://www.podeyfamilyandsportschiropractic.com/form.png"
    };

    titleObject = {
        title: "Angular 2!!!",
        funds: 102043.34,
        date: new Date(Date.now()),

    };

    constructor() {


    }

    onClickDropDown(event) {
        console.log(event);
    }


    onClickNormal(event) {

        this.ViewMode = 0;

        this.change.emit({ newValue: this.ViewMode });


        //     console.log(mode);
    }


    onClickThumb(event) {

        this.ViewMode = 1;

        this.change.emit({ newValue: this.ViewMode });


        //   console.log(mode);
    }

    onClickUserForm(event) {

        this.ViewMode = 2;

        this.change.emit({ newValue: this.ViewMode });


        console.log(this.ViewMode);
    }

}