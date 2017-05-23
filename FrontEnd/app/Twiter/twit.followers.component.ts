import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers.service';


@Component({
    selector: 'twit-followers',
    templateUrl: 'app/Twiter/twit.followers.component.html',
    styleUrls: ['app/Twiter/twit.followers.component.css'],
    providers: [FollowersService]
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