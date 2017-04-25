import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TwitAutorsService } from '../Twiter/twitAutors.service';
import { TwiterAutor } from '../Models/twiter.Autor.Model';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import { SpotifyService } from '../Services/spotify.service';
import { QuoteService } from '../Services/quote.service.';

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


export class UserFormComponent implements OnInit, OnDestroy {
  subscribe2;


  frequencies = [
    { id: 1, label: 'Daily' },
    { id: 2, label: 'Weekly' },
    { id: 3, label: 'Monthly' }];

  userForm: FormGroup;
  isCollapsed = true;
  dataForComplition: any;
  subscribe;
  spotify: any;

  constructor(private twitAutorsService: TwitAutorsService,
    private spotifyService: SpotifyService,
    private quoteService: QuoteService,
    private formBuilder: FormBuilder) {


    this.twitAutorsService = twitAutorsService;


  }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
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
    //autorImage   autorComments

    this.subscribeToEvent();
  }


  suggestionClick(item) {
    this.spotify = item;
    var images = item["images"];

    var userPhoto = images.length > 0 ?
      images[0]["url"] : '';

    this.userForm.controls['autorName'].setValue(item["name"]);
    this.userForm.controls['autorImage'].setValue(userPhoto);
    console.log(item);

    console.log(this.userForm.value);
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
      if(tmp)
        this.userForm.controls['autorComments'].setValue(tmp.value.joke);
        else
          this.userForm.controls['autorComments'].setValue(' ');
    });
  }


  addUser() {
 
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userForm.value['TotalLikes'] = this.spotify["popularity"];
      this.twitAutorsService.create(this.userForm.value as TwiterAutor);
      this.userForm.reset(); 
    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}