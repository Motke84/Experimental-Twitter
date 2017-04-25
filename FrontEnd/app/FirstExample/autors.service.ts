import { Injectable } from '@angular/core'

@Injectable()
export class AutorsService 
{ 
    getAutors() : string[]
    {
        return ["Tolkin","J.r.r Martin","Jul Vern"];
    }
    
}