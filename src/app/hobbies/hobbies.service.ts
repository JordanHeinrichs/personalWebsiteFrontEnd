import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { ItemChoice } from './../itemselector';
import { AppSettings } from './../app.settings';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HobbiesService {
   private hobbyListUrl = AppSettings.API_ENDPOINT + 'hobbies';
   private hobbyUrl = AppSettings.API_ENDPOINT + 'hobby/';
   constructor(private http: Http) {}

   hobbyList(): Promise<ItemChoice[]> {
      return this.http
         .get(this.hobbyListUrl)
         .toPromise()
         .then(res => res.json());
   };

   hobby(name: string): Promise<string> {
      return this.http
         .get(this.hobbyUrl + name)
         .toPromise()
         .then(res => res.json());
   }
}
