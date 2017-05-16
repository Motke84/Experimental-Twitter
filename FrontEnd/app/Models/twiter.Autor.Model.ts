


export class TwiterAutor {
  Id?: number;
  AutorImage: string;
  AutorUser: string;
  AutorName: string;
  AutorComments: string;
  TotalLikes: number;
  CurrentUserLiked: boolean;
  AutorEmail : string;
  MailFrequency : string;
}


 export var Frequencies = [
    { id: 1, label: 'Daily' },
    { id: 2, label: 'Weekly' },
    { id: 3, label: 'Monthly' }];