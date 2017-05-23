import { Component, Output, Input, EventEmitter, OnDestroy, OnInit } from '@angular/core'
import { TwitComponent } from './twit.component';
import { TwitAutorsService } from './twitAutors.service';
import { TwiterAutor, Frequencies } from '../Models/twiter.Autor.Model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router'
import { SpinnerComponent } from '../Infra/spinner.component';
// @ts-check
@Component({

    selector: 'TwitList',
    templateUrl: 'app/Twiter/twit-list.component.html',
    styleUrls: ['app/Twiter/twit-list.component.css'],
    providers: [TwitAutorsService],

})



export class TwitListComponent implements OnInit, OnDestroy {
    twitAutorsSub: any;
    TwitAutors: TwiterAutor[] = [];
    allTwitAutors: TwiterAutor[] = [];
    maxTwits = 3;
    @Input('ViewMode') viewMode = 0;
    isLoading = true;
    routesSub;
    frequencies = Frequencies;
    currentFrequency = "";

    constructor(private twitAutorsService: TwitAutorsService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {

        this.routesSub = this.activatedRoute.params.subscribe(params => {
            this.viewMode = +params["mode"];
        });


        this.loadAllTwits();
    }

    loadAllTwits(filter?) {
        this.isLoading = true;
        this.twitAutorsSub = this.twitAutorsService.loadAllAuthors().
            delay(1000).
            subscribe(data => {
              //  this.allTwitAutors = data;

                this.allTwitAutors = filter && filter["frequency"] != "" ?
                    data.filter(e => e.MailFrequency == filter["frequency"]) : data;

                this.pagingChanged(1);
   
            }, error => console.log('Could not load all twits. ' + error),
            () => this.isLoading = false);
    }

    ngOnDestroy() {
        this.routesSub.unsubscribe();
    }

    ngAfterContentInit() {
    
    }

    twitDeleted(twit: TwiterAutor) {
        if (confirm("Are you sure?")) {
            this.isLoading = true;

            this.twitAutorsService.deleteTwit(twit.Id).
                delay(1000).
                subscribe(data => {
                     this.allTwitAutors = data;
                     
                    //this.TwitAutors = data;
                    this.TwitAutors = this.currentFrequency != "" ?
                        data.filter(e => e.MailFrequency == this.currentFrequency) : data;
                        this.pagingChanged(1);

                  
                }, error => console.log('Could not delete twit. ' + error),
                () => this.isLoading = false);
        }
    }

    filterTwits(value) {
      //  this.allTwitAutors = []
        console.log(value);
        this.loadAllTwits(value)

    }

    pagingChanged(page) {
        var newList = [];

        var startIndex = (page - 1) * this.maxTwits;

      
        this.TwitAutors = _.take(_.rest(this.allTwitAutors, startIndex), this.maxTwits);

    }
}