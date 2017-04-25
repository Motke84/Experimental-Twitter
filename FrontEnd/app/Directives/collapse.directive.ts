import {Directive, Input, HostBinding, ElementRef} from '@angular/core';



@Directive({
    selector: '[collapse]',



  })



export class Collapse 
{ 

  @HostBinding('class.collapsing') 
  private isCollapsing:boolean  = false; 

    // style
  @HostBinding('style.height') 
  private height:string;
  h; 
  firstTime = true;
  
  @Input()
  private set collapse(value:boolean) 
  { 

  //  console.log("collapse1 "+this.firstTime );
   
    if(value!==undefined)
    {
    //  console.log("collapse2 "+this.firstTime );
      if(value){ 
        this.hide(); 
      }else { 
        this.show();
      }

      this.firstTime = false;
    }
  
    //
  }

  constructor(public el: ElementRef) 
  {  
    this.firstTime = true;
    this.measureHeight(); 
  }  

  measureHeight() 
  {
    let elem = this.el.nativeElement;
    //lets be sure the element has display:block style
    elem.className = elem.className.replace('collapse', '');
    this.h = 50

     //  console.log("collapse1 "+this.h);
   
  }

  hide()
  {
     // console.log("hide "+this.firstTime);
    this.height = this.h +'px'
    
  //  if(!this.firstTime)
 //   {
  //  setTimeout(() => 
//    {
        this.height = '0px';
        
        this.isCollapsing = true;//apply 'collapsing' class
//    },1); 
 //   }
  }

  show() 
  {
   // console.log("show "+ this.firstTime);
    this.height = '0px'
  //  setTimeout(() => 
  //  {
        this.height = this.h + 'px';
        this.isCollapsing = true;//apply 'collapsing' class
 //   },1);
  }  
}