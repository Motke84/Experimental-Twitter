import {Directive, Renderer, ElementRef} from '@angular/core';


@Directive({
    selector: '[autoGrow]',
    host: {
     '(focus)': 'onFocus()',
     '(blur)':  'onBlur()',

    }
})

export class AutoGrowDirective 
{
    constructor(private renderer : Renderer , private elementRef : ElementRef) 
    {
        
    }

    onFocus()
    {
        this.renderer.setElementStyle(this.elementRef.nativeElement,'width','200');

        this.renderer.setElementStyle(this.elementRef.nativeElement,'cursor','pointer');
    }

    onBlur()
    {
        this.renderer.setElementStyle(this.elementRef.nativeElement,"width",'120');
    }


}