import { Component, Output, Input, EventEmitter } from '@angular/core'
import { HeartComponent } from '../Infra/heart.component';
import { SummaryPipe } from '../Infra/Pipes/summary.pipe';
import { TwiterAutor } from '../Models/twiter.Autor.Model';

@Component({
  selector: 'Twit',
  templateUrl: 'app/Twiter/twit.component.html',
  styleUrls: ['app/Twiter/twit.component.css']
})



export class TwitComponent {
  //  @Input('AutorName') autorName = 'Stam';
  //   @Input('AutorImage') autorImage = "http://lorempixel.com/100/100/people?1";
  //   @Input('AutorUser') autorUser = 'Klum';
  //   @Input('AutorComments') autorComments = 'Balablah';

  //  @Input('TotalLikes') totalLikes = 10;


  @Output('UserFavorateChanged') change = new EventEmitter();
  @Output('Deleted') del = new EventEmitter();

  @Input('Data') data: TwiterAutor;
  // @Input('ViewMode') ViewMode = 'Thumb';
  @Input('ViewMode') ViewMode = 0;
  //  viewModeValue = ViewModeValue;
  showEditButtons = false;

  constructor() {



  }

  LikeHasChanged($event) {
    console.log(this.ViewMode);
    this.change.emit(event);
  }

  delete($event) {
    this.del.emit(event);
  }

}