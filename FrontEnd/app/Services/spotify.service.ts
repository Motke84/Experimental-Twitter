import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class SpotifyService 
{ 
    url = "https://api.spotify.com/v1/search?type=artist&q=";
    searchArtists(searchItem : any) 
    {
        var fullUrl = this.url + searchItem;
        var promise = $.getJSON(fullUrl) as any;
         console.log(promise);
        return Observable.fromPromise(promise);
    }
    
}