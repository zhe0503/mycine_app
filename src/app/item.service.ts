import { Injectable } from '@angular/core';
import{Item} from "./item"
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  list: Item[]=[{
    
    filmTitle:"Schindler's List",
    content : "I usually don’t comment on movies, but for “Schindler’s List” I had to make an exception. This is one of the most heartbreaking, yet beautiful, true stories ever to hit the silver screen. I urge everyone to see this movie sometime in their life. I give a ton of credit to Mr. Steven Speilberg for creating a moving masterpiece.",
    note:5
},
{
    
    filmTitle:"Pulp Fiction",
    content : "Viewers are taken on a ride through three different stories that entertwine together around the world of Marcellus Wallace. Quentin Tarantino proves that he is the master of witty dialogue and a fast plot that doesn't allow the viewer a moment of boredom or rest. From the story of two hit-man on a job, to a fixed boxing match to a date between a hit-man and the wife of a mob boss. There was definitely a lot of care into the writing of the script, as everything no matter the order it is in, fits with the story. Many mysteries have been left such as what is inside of the briefcase and why Marcellus Wallace has a band-aid on the back of his neck, which may be connected. The movie redefined the action genre and reinvigorated the careers of both John Travolta and Bruce Willis. This movie is required viewing for any fan of film.",
    note:4.5
}
]




  constructor() {
  
    
   }


}
