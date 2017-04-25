import {Component,Output ,Input, EventEmitter} from '@angular/core'
import {HeartComponent} from '../Infra/heart.component';
import {SummaryPipe} from '../Infra/Pipes/summary.pipe';
import { TwiterAutor } from '../Models/twiter.Autor.Model';

@Component({
    selector: 'Twit',
    template: 
    `
    <div [ngSwitch] = "ViewMode">
    <template [ngSwitchCase] ="0" >
    <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="img-rounded" src= {{data?.AutorImage}} >
    </a>
 
  </div>
  <div class="media-body">
    <Strong class="media-heading">{{data?.AutorName}}</Strong>
    <b class="media-heading">@{{data?.AutorUser}}</b>
    <div>
      <span>{{data.AutorComments | summery:10 }}</span>
    </div>
    <Heart [TotalLikes] = "data?.TotalLikes" [Liked] = "data?.CurrentUserLiked" 
    (LikeChanged)="LikeHasChanged($event)"></Heart>
  </div>

</div>
  </template>

  <template [ngSwitchCase] ="1">
  <div class="col-sm-3 col-md-3 col-md-offset-0">
    <div class="thumbnail">
     <img class="img-thumbnail" src= {{data?.AutorImage}} >
      <div class="caption">
         <Strong class="media-heading">{{data?.AutorName}}</Strong>
        <b class="media-heading">@{{data?.AutorUser}}</b>
      <div>  
            <span>{{data?.AutorComments | summery:15 }}</span>
        </div>
  
          <Heart [TotalLikes] = "data?.TotalLikes" [Liked] = "data?.CurrentUserLiked" 
          (LikeChanged)="LikeHasChanged($event)"></Heart>
      </div>
    </div>
  </div>


    </template>
</div>`,


styles: 
     [`
        .img-rounded {
                width: 100px;
                height: 100px;

        }


        .img-thumbnail {
                width: 200px;
                height: 200px;

        }

        b {
                color: #ccc;
                
        }

        .span {
                    font-size: 12px;
                  line-height: 10px;
                
        }

        .media {
            margin: 10px;
        }

    

   `], 
})



export class TwitComponent  
{
  //  @Input('AutorName') autorName = 'Stam';
 //   @Input('AutorImage') autorImage = "http://lorempixel.com/100/100/people?1";
 //   @Input('AutorUser') autorUser = 'Klum';
 //   @Input('AutorComments') autorComments = 'Balablah';

  //  @Input('TotalLikes') totalLikes = 10;


    @Output('UserFavorateChanged') change = new EventEmitter();

    @Input('Data') data : TwiterAutor;
   // @Input('ViewMode') ViewMode = 'Thumb';
    @Input('ViewMode') ViewMode = 0;
  //  viewModeValue = ViewModeValue;


    constructor() 
    { 

   
      
    }

   LikeHasChanged($event)
   {
         console.log(this.ViewMode);
       this.change.emit(event);  
   }
    
}