import { Injectable } from '@angular/core'


@Injectable()
export class EpisodeService 
{ 
    getEpisodes() : string[]
    {
        return ["Episode1","Episode2","Episode3"];
    }
    
}