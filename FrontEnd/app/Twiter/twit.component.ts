import { Component, Output, Input, EventEmitter } from '@angular/core'
import { HeartComponent } from '../Infra/heart.component';
import { SummaryPipe } from '../Infra/Pipes/summary.pipe';
import { TwiterAutor } from '../Models/twiter.Autor.Model';

@Component({
  selector: 'Twit',
  template:
  `
    <div [ngSwitch] = "ViewMode">
   
 
    <template [ngSwitchCase] ="0" >
    <div class="media">
 
  <div class="media-left" (mouseover) = "showEditButtons=true" (mouseleave) =  "showEditButtons=false">
         <a  [routerLink]= "['../../addAuthor',data?.Id]" *ngIf="showEditButtons" id="edit" class= "edit-btn glyphicon glyphicon-edit"></a> 
         <a  (click)= "delete(event)" *ngIf="showEditButtons" id="del" class= "del-btn fa fa-times fa-3"></a> 
    <a  [routerLink]= "['../../followers',data?.AutorUser]" >
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
    <div class="thumbnail" (mouseover) = "showEditButtons=true" (mouseleave) =  "showEditButtons=false">
        <a  [routerLink]= "['../../addAuthor',data?.Id]" *ngIf="showEditButtons" id="edit" class= "edit-btn glyphicon glyphicon-edit"></a> 
        <a  (click)= "delete(event)" *ngIf="showEditButtons" id="del" class= "del-btn fa fa-times fa-3"></a> 
          <a  [routerLink]= "['../../followers',data?.AutorUser]" >
     <img class="img-thumbnail" src= {{data?.AutorImage}} >
     </a>
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

        .edit-btn
        {
           position:relative; 
                float: left;
                  margin-bottom: -15px;
                  color: #217dbb;
                  
        }

        
        .del-btn
        {
           position:relative; 
                float: right;
                  margin-bottom: -15px;
                  color: #217dbb;
                  
        }
    

   `],
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