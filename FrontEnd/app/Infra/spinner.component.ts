import { Component, OnInit ,Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: 
    `
    <div *ngIf = "isLoading"> 
           <i class="centered fa fa-spinner fa-pulse fa-5x">  </i> 
        </div>
    `
})

export class SpinnerComponent implements OnInit {

    @Input('isLoading') isLoading = false;

    constructor() { }

    ngOnInit() { }
}