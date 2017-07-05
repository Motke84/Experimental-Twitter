


export class TwiterAutor {
  id?: number;
  autorImage: string;
  autorUser: string;
  autorName: string;
  autorComments: string;
  totalLikes: number;
  currentUserLiked: boolean;
  autorEmail : string;
  mailFrequency : string;
}


 export var Frequencies = [
    { id: 1, label: 'Daily' },
    { id: 2, label: 'Weekly' },
    { id: 3, label: 'Monthly' }];