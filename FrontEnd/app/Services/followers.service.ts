import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class FollowersService {

    constructor() { }

    userUrl = "https://api.github.com/users/";
    followersUrl = "/followers";

    getUser(searchItem: any) {
        var fullUrl = this.userUrl + searchItem;
        var promise = $.getJSON(fullUrl) as any;
        console.log(promise);
          console.log(fullUrl);
        return Observable.fromPromise(promise);
    }

    getFollowers(searchItem: any) {
        var fullUrl = this.userUrl + searchItem + this.followersUrl;
        var promise = $.getJSON(fullUrl) as any;
        console.log(promise);
          console.log(fullUrl);
        return Observable.fromPromise(promise);
    }

    
}