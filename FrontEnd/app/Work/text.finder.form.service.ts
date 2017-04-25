import { Injectable, EventEmitter, } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { word, option } from './word.model';

@Injectable()
export class TextFinderFormService {



  constructor(private http: Http) { }


  url = "http://localhost:60690/api/WordReplacer/";

  // url = "app/work/words.json";
  alternatewordsUrl = "app/work/words.alternate.json";
  alternateGroupUrl = "app/work/words.group.alternate.json";

  getAllText(): Observable<word[]> {
    return this.http.get(`${this.url}` + "GetAllWords").
      map(response => response.json());
  }

  getAlternativeWordsForWord(wordId: number): Observable<string[]> {
    return this.http.get(`${this.url}GetAlternativeWords/${wordId}`).
      map(response => response.json());
  }

  getAlternativeWordsForGroup(word: word): Observable<string[]> {
    return this.http.get(`${this.url}GetAlternativeGroupWords/${word.Group1Id}`).
      map(response => response.json());
  }


  saveWordOption(selected: word, optionText: string): Observable<word[]> {
    var op: option =
      {
        Id: selected.Id,
        Text: optionText,
        Mode: 1,
      };

    console.log(selected);


    console.log(op);
    return this.http.post(`${this.url}SaveWordOption/`, op).
      map(response => response.json());
  }

  saveGroupOption(selected: word, optionText: string): Observable<word[]> {
    var op: option =
      {
        Id: selected.Group1Id,
        Text: optionText,
        Mode: 1,
      };

    console.log(selected);


    console.log(op);
    return this.http.post(`${this.url}SaveGroupOption/`, op).
      map(response => response.json());
  }

   saveEditorOption(optionText: string): Observable<word[]> {
    var op: option =
      {
        Id: 0,
        Text: optionText,
        Mode: 1,
      };


    console.log(op);
    return this.http.post(`${this.url}SaveEditorOption/`, op).
      map(response => response.json());
  }
}