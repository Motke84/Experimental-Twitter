import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TwitAutorsService } from '../Twiter/twitAutors.service';
import { Frequencies,TwiterAutor } from '../Models/twiter.Autor.Model';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import { SpotifyService } from '../Services/spotify.service';
import { QuoteService } from '../Services/quote.service.';
import { Router, ActivatedRoute } from '@angular/router';
import { FormComponent } from '../forms/form.component';

@Component({
  selector: 'User-Form',
  templateUrl: 'app/Forms/user.form.component.html',
  styles:
  [` 
        .img-rounded {
                width: 100px;
                height: 100px;

        }
        .form {
           margin: 10px;
        }

        .form-control
        {
            width: 400px;
        }

        .alert
        {
          width: 440px;
        }

        .scrollable-menu {
            height: auto;
            max-height: 200px;
            overflow-x: hidden;
        }
   

   `],
})


export class UserFormComponent implements OnInit, OnDestroy, FormComponent {
  userId: number;

  hasUnsavedChanges(): Boolean {
    return this.form.dirty;
  }

  form: FormGroup;
  subscribe2;
  twiterAutor = new TwiterAutor();

  frequencies = Frequencies
  isCollapsed = true;
  dataForComplition: any;
  subscribe;
  spotify: any;

  constructor(private twitAutorsService: TwitAutorsService,
    private spotifyService: SpotifyService,
    private quoteService: QuoteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.twitAutorsService = twitAutorsService;


  }

  ngOnInit() {


    this.initForm();
    this.subscribeToEvent();


    this.activatedRoute.params.subscribe(params => {
      this.twiterAutor.Id = +params["id"];
    });

    if (!this.twiterAutor.Id)
      return;

    this.twitAutorsService.getTwit(this.twiterAutor.Id).
      subscribe(data => {
        this.twiterAutor = data;

        this.spotifyService.searchArtists(data.AutorName).subscribe(spot =>
          this.spotify = (<any>spot).artists.items[0])
      });

  }

  initForm() {
    this.form = this.formBuilder.group({
      autorUser: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)])],

      autorName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)])],

      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9!#$%&*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$')])],

      autorImage: ['', Validators.compose([
        Validators.required])],

      autorComments: ['', Validators.compose([
        Validators.required])],

      frequency: ['', Validators.compose([
        Validators.required])]
    });

  }

  suggestionClick(item) {
    this.spotify = item;
    var images = item["images"];

    var userPhoto = images.length > 0 ?
      images[0]["url"] : '';

    this.form.controls['autorName'].setValue(item["name"]);
    this.form.controls['autorImage'].setValue(userPhoto);
    console.log(item);

    console.log(this.form.value);
  }

  subscribeToEvent() {
    // debugger;
    console.log($("#autorName"));

    var keyups = Observable.fromEvent($("#autorName"), "keyup").
      map(e => (<any>e).target.value).
      filter(text => text.length >= 3).
      debounceTime(100).
      distinctUntilChanged().
      flatMap(searchItem => this.spotifyService.searchArtists(searchItem));

    this.subscribe = keyups.subscribe(data => {
      console.log(<any>data);
      // console.log((<any>data).artists.items);
      this.dataForComplition = (<any>data).artists.items.
        filter(e => e.images != null &&
          e.images.length > 0);

      //  console.log(this.dataForComplition);
      this.isCollapsed = this.dataForComplition > 0;
    });


    console.log($("#generate"));
    var click = Observable.fromEvent($("#generate"), "change").
      map(e => (<any>e).target.checked).
      //  filter(e => e == true).
      flatMap(value => value ? this.quoteService.getQuote() : Observable.empty());

    console.log(click);

    this.subscribe2 = click.subscribe(data => {


      var tmp = (<any>data);
      console.log(tmp);
      if (tmp)
        this.form.controls['autorComments'].setValue(tmp.value.joke);
      else
        this.form.controls['autorComments'].setValue(' ');
    });
  }


  save() {

    if (this.form.valid) {
      console.log(this.twiterAutor);
      this.form.value['TotalLikes'] = this.spotify["popularity"];

      this.twitAutorsService.create(this.twiterAutor).
        subscribe(data => {

           this.form.reset();
           this.router.navigate(['twiter', 0]);

        })



    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}