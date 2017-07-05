
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
  //private autorsUrl = 'http://localhost:49882/api/Twiter';

  private autorsUrl = 'http://localhost:54148/api/Twiter';
  constructor(private http: Http) {


  }



  loadAllAuthors(): Observable<TwiterAutor[]> {
    return this.http.get(`${this.autorsUrl}/GetAllTwits`).
      map(response => response.json());
  }


  create(twiterAutor: TwiterAutor): Observable<TwiterAutor[]> {
    return this.http.post(`${this.autorsUrl}/AddTwit`, twiterAutor)
      .map(response => response.json());
  }

  getTwit(id: number): Observable<TwiterAutor> {
    return this.http.get(`${this.autorsUrl}/GetTwit/` + id).
      map(response => response.json());
  }

  deleteTwit(id: number): Observable<TwiterAutor[]> {
    return this.http.get(`${this.autorsUrl}/DeleteTwit/` + id).
      map(response => response.json());
  }

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



