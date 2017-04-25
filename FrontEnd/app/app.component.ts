import {Component} from '@angular/core';




@Component({
    selector: 'my-app',
   template: `
 
        <NavigatorBar (ViewModeChanged) = "ModeChanged($event)">
      <span class = "title" >Angular 2!!!</span> 
      </NavigatorBar>
   
  <router-outlet> </router-outlet>
     
       
      
      `,
  styles:[` `],


})
  //  <TwitList [ViewMode] = "viewMode">  </TwitList>
  //     <Main-Form [ViewMode] = "viewMode"> </Main-Form>
  
export class AppComponent 
{ 

 titleObject = {
        title : "Angular 2!!!",
    funds : 102043.34,
    date : new Date(Date.now())};

   viewMode = 1;
//   postStar = { isEmpty: false , totalLikes: 50 , liked: true };
 //  postHeart = { isEmpty: false , totalLikes: 50  };
  // postVote = { voteCount: 112 , userVote: VoteValue.Good};

/*
   FavorateHasChanged($event)
   {
     
     console.log($event);
   }

   TotalLikesHasChanged($event)
   {
     console.log($event);
   }
   */

    ModeChanged(newValue)
    {
       this.viewMode = newValue.newValue;

       console.log(this.viewMode);
    }
}