import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'


@Injectable()
export class QuoteService {

    url = "http://api.icndb.com/jokes/random"


    getQuote() {

        var promise = $.getJSON(this.url) as any;
        console.log(promise);
        return promise;
    }

}