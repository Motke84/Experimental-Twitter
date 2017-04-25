import {Directive, Renderer, ElementRef} from '@angular/core';


@Directive({
    selector: '[pointer]',
    host: {
     '(mouseover)': 'mouseOver()',
    }
})

export class CursorPointerDirective 
{
    constructor(private renderer : Renderer , private elementRef : ElementRef) 
    {

    }

    mouseOver()
    {
        this.renderer.setElementStyle(this.elementRef.nativeElement,'cursor','pointer');
      
    }

}