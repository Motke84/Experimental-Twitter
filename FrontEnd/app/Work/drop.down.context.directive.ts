import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appcustomdropdown]'
})
export class CustomdropdownDirective {
    private isOpen = false;
    constructor() { }

    @HostBinding('class.open') get opened() {
        return this.isOpen;
    }

    @HostListener('contextmenu', ['$event']) open(event) {
        this.isOpen = true;

        return false;
    }
    @HostListener('mouseleave') close() {
        this.isOpen = false;
    }

    @HostListener('click') closeOnChoise() {
        this.isOpen = false;
    }


}