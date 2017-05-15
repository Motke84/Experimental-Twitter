import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import { TwitComponent } from './twit.component';
import { TwitAutorsService } from './twitAutors.service';
import { TwiterAutor } from '../Models/twiter.Autor.Model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router'

@Component({

    selector: 'TwitList',
    template: `
 <div *ngIf = "TwitAutors.length > 0">
        <div *ngFor="let twitAutor of TwitAutors">           
  <Twit (Deleted)="twitDeleted(twitAutor)" [Data]="twitAutor" [ViewMode] = "viewMode"></Twit>  
     </div>
        <div [hidden] = "TwitAutors.length > 0"> 
             Not Twits For Today!!! :-(
        </div>
        
    </div>
     <div *ngIf = "isLoading"> 
           <i class="centered fa fa-spinner fa-pulse fa-5x">  </i> 
        </div>
    `,
    //hidden - good for hidding small elements *ngIf- good for hidding big elements
    providers: [TwitAutorsService],

})



export class TwitListComponent implements OnInit, OnDestroy {
    twitAutorsSub: any;
    TwitAutors: TwiterAutor[] = [];
    TwitAutors2: TwiterAutor[];
    @Input('ViewMode') viewMode = 0;
    isLoading = true;
    routesSub;

    constructor(private twitAutorsService: TwitAutorsService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
        // //  this.TwitAutors = twitAutorsService.getItems();
        //   console.log(this.TwitAutors.length);
    }


    ngOnInit() {

        this.routesSub = this.activatedRoute.params.subscribe(params => {
            this.viewMode = +params["mode"];
        });


        this.twitAutorsSub = this.twitAutorsService.loadAllAuthors().
            delay(1000).
            subscribe(data => {
                this.isLoading = false;
                //  console.log(data);
                this.TwitAutors = data;
            })

        //  this.TwitAutors = this.twitAutorsService.autors; // subscribe to entire collection



        //  console.log(this.TwitAutors);
        // load all todos

    }

    ngOnDestroy() {
        this.routesSub.unsubscribe();
    }

    ngAfterContentInit() {
        //  this.twitAutorsService.loadAll();
    }

    twitDeleted(twit: TwiterAutor) {
        if (confirm("Are you sure?")) {
            this.isLoading = true;

            this.twitAutorsService.deleteTwit(twit.Id).
                delay(1000).
                subscribe(data => {
                    this.isLoading = false;
                    this.TwitAutors = data;
                });
        }
    }
}