import { Component,VERSION } from '@angular/core';




@Component({
  selector: 'my-app',
  template: `
 
      <NavigatorBar (ViewModeChanged) = "ModeChanged($event)">
      <span class = "title" > {{titleObject.title}} </span> 
      </NavigatorBar>
   
      <router-outlet> </router-outlet>
     
       
      
      `,
  styles: [` `],


})

export class AppComponent {

  titleObject = {
    title: "Angular: "+ VERSION["full"],
    funds: 102043.34,
    date: new Date(Date.now())
  };

  viewMode = 1;

  ModeChanged(newValue) {
    this.viewMode = newValue.newValue;

    console.log(this.viewMode);
 
  }
}