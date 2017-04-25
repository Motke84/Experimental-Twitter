
import { Injectable, EventEmitter, } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TwiterAutor } from '../Models/twiter.Autor.Model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitAutorsService {
  items: TwiterAutor[];

  private _autors: BehaviorSubject<TwiterAutor[]>;
  // public autors : Observable<TwiterAutor[]>
  private autorsUrl2 = 'http://588e065bf30c7212004f2c8a.mockapi.io/twiterAutors';
  private autorsUrl = 'http://localhost:49882/api/Twiter';


  private dataStore: {
    autors: TwiterAutor[]
  };
  public autors;

  constructor(private http: Http) {

    this.dataStore = { autors: [] };
    this._autors = new BehaviorSubject([]);
    this.autors = this._autors.asObservable();


  }



  loadAll() {
    this.http.get(`${this.autorsUrl}/GetAllTwits`).
      debounceTime(300).
      map(response => 
      { 
        console.log(response.json());
      return response.json();
  }).
      subscribe(data => {
        this.dataStore.autors = data;
        this._autors.next(Object.assign({}, this.dataStore).autors);
      }, error => console.log('Could not load autors.'));
  }


  loadAllAuthors() : Observable<TwiterAutor[]> {
    return this.http.get(`${this.autorsUrl}/GetAllTwits`).
      map(response =>  response.json());
  }


  create(twiterAutor: TwiterAutor) {
    this.http.post(`${this.autorsUrl}/AddTwit`, twiterAutor)
      .map(response => response.json()).
      subscribe(data => {
        this.dataStore.autors.push(data);
        this._autors.next(Object.assign({}, this.dataStore).autors);
      }, error => console.log('Could not create autors.'));
  }

  /* update(twiterAutor: TwiterAutor) {
     this.http.put(`${this.autorsUrl}/todos/${twiterAutor.id}`, JSON.stringify(twiterAutor))
       .map(response => response.json()).subscribe(data => {
         this.dataStore.autors.forEach((t, i) => {
           if (t.id === data.id) { this.dataStore.autors[i] = data; }
         });
 
         this._autors.next(Object.assign({}, this.dataStore).autors);
       }, error => console.log('Could not update todo.'));
   }*/

  /*  remove(autorId: number) {
    this.http.delete(`${this.autorsUrl}/todos/${autorId}`).subscribe(response => {
      this.dataStore.autors.forEach((t, i) => {
        if (t.id === autorId) { this.dataStore.autors.splice(i, 1); }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not delete todo.'));
  }*/



}


