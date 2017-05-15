import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers.service';


@Component({
    selector: 'twit-followers',
    template: `
  <div class="body">

  	<div  *ngIf="!isLoading">
	    <div>
		   <h2>@{{userName}}</h2>
           <img class="avatar media-object" src={{user?.avatar_url}} >
		</div>

		<div>
		   <h3>Followers</h3>
		</div>

		<div *ngFor="let follower of followers">
		   <div class="media">
			  <div class="media-left">
				 <span>
				 <img class="avatar" src= {{follower?.avatar_url}} >
				 </span>
			  </div>
			  <div class="media-body">
				 <h4 class="media-heading">{{follower?.login}}</h4>
			  </div>
		   </div>
		</div>
	</div>

	<div *ngIf="isLoading">
		<i class="centered fa fa-spinner fa-pulse fa-5x">  </i>
	</div>

</div>
    `,
    styles:
    [`
       .avatar	{
                    width:	100;
                    height:	100;
                    border-radius:	100%;
                    margin-bottom:  10px;
                }	

     
        `],
    providers: [FollowersService]


    //   <img class="media-object" src="user.avatar_url" >
})

export class TwitFollowersComponent implements OnInit {
    followers: {
    };

    user: {
    };

    isLoading = true;
    followersSub;
    userName;
    routesSub;

    constructor(private followersService: FollowersService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

        this.routesSub = this.activatedRoute.params.subscribe(params => {
            this.userName = params["userName"];
            this.followersSub = Observable.forkJoin(this.followersService.getUser(this.userName),
                this.followersService.getFollowers(this.userName)).
                delay(1000).subscribe(
                data => {
                    this.user = data[0];
                    this.followers = data[1];
                    console.log(data);
                },
                err => console.error(err), () => { this.isLoading = false; }
                );
        });


    }
}