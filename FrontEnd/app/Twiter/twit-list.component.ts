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
    template: `

 <select class="select form-control" (change)="filterTwits({ frequency: fr.value })" #fr>
            <option value=""></option>
            <option *ngFor="let frequency of frequencies" value="{{frequency.label}}" >
                {{ frequency.label }}
            </option>
        </select>
        <div class ="body">
        <pagination (page-changed)="pagingChanged($event)" [items] ="allTwitAutors" [page-size]= "maxTwits" > </pagination>
    </div>
 <div *ngIf = "TwitAutors.length > 0">


        <div *ngFor="let twitAutor of TwitAutors">           
  <Twit (Deleted)="twitDeleted(twitAutor)" [Data]="twitAutor" [ViewMode] = "viewMode"></Twit>  
     </div>
        <div [hidden] = "TwitAutors.length > 0"> 
             Not Twits For Today!!! :-(
        </div>
        
    </div>
     <spinner [isLoading] ="isLoading" >   </spinner> 
    `,
    //hidden - good for hidding small elements *ngIf- good for hidding big elements
    providers: [TwitAutorsService],
    styles:
    [` 
       .select{
             margin: 15px;
             width: 150px;
      
             font-size-adjust: inherit;
             text-align: center
             
        }
   

   `],

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
                    this.maxTwits = 5;
                }, error => console.log('Could not delete twit. ' + error),
                () => this.isLoading = false);
        }
    }

    filterTwits(value) {
        console.log(value);
        this.loadAllTwits(value)

    }

    pagingChanged(page) {
        var newList = [];

        var startIndex = (page - 1) * this.maxTwits;

      
        this.TwitAutors = _.take(_.rest(this.allTwitAutors, startIndex), this.maxTwits);

    }
}