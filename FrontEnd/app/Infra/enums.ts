import {Component,Output ,Input, EventEmitter} from '@angular/core'





export interface  Enums 
{
  viewModeValue: ViewModeValue;

}
  export enum VoteValue 
    {
        Good = 1,
        None = 0,
        Bad = -1
  }


  export enum ViewModeValue
    {
        Normal = 0,
        Thumb = 1,
        UserForm = 2,
  }  