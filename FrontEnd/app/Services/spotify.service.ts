import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class SpotifyService {
    url = "https://api.spotify.com/v1/search?type=artist&q=";
    userName = '6ea30475cfa14b6489dfa630fdd2e3b7';
    password = '6967f21ab7d34915930ab7bc7b834250';

    searchArtists(searchItem: any) {
        var fullUrl = this.url + searchItem;
        var promise = $.ajax({
            url: fullUrl,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " +
                    window.btoa(this.username + ":" + this.password));
            },
            success: function (result) {
                console.log(arguments);
            }
        });

        
        //  var promise = $.getJSON(fullUrl) as any;
        console.log(promise);
        return Observable.fromPromise(promise);
    }

}