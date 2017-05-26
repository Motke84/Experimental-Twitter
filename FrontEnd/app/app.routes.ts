

import { Router, RouterModule } from '@angular/router';

import { TwitListComponent } from './Twiter/twit-list.component';
import { TwitFollowersComponent } from './Twiter/twit.followers.component';
import { AnimationameComponent } from "./Infra/animate.component";



export const routing = RouterModule.forRoot([

  { path: 'twiter/:mode', component: TwitListComponent },
  { path: 'followers/:userName', component: TwitFollowersComponent },
   { path: 'anim', component: AnimationameComponent },
  { path: '**', component: TwitListComponent }


  
]);
