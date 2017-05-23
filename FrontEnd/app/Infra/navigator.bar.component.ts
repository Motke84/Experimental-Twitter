import { Component, Output, Input, EventEmitter } from '@angular/core'
//import {ViewModeValue} from './enums';
import { ZippyComponent } from './zippy.component';
import { Collapse } from '../Directives/collapse.directive';



@Component({
    selector: 'NavigatorBar',

    templateUrl: 'app/Infra/navigator.bar.component.html',
    styleUrls: ['app/Infra/navigator.bar.component.css'],

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