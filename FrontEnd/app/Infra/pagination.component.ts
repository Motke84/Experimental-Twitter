import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/Infra/pagination.component.html'
})

export class PaginationComponent implements OnInit, OnChanges {

    numberOfPages: number = 0;

    @Input('items') items = [];
    @Input('page-size') pageSize = 1;
    pages = []
    currentPage = 1;
    @Output('page-changed') pageEvent = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
     
    }

    ngOnChanges(changes: SimpleChanges) {

        if (!changes)
            return;

        this.currentPage = 1;

        var changedItems = changes.items.currentValue.length;


        this.numberOfPages = Math.floor(changedItems / this.pageSize);

        if (changedItems == 0)
            return;

        this.numberOfPages = this.numberOfPages > 0 ?
            this.numberOfPages : 1;

        this.pages = [];
        for (var i = 1; i <= this.numberOfPages; i++)
            this.pages.push(i);
    }

    choose(current) {

        if (this.currentPage != current) {
            this.currentPage = current;
            this.pageEvent.emit(this.currentPage);
        }
    }

    next() {
        if (this.currentPage == this.numberOfPages)
            return;

        this.currentPage++;
        this.pageEvent.emit(this.currentPage);

    }

    previous() {

        if (this.currentPage == 1)
            return;

        this.currentPage--;
        this.pageEvent.emit(this.currentPage);
    }

}