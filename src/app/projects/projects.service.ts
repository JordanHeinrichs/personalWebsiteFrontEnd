import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { ItemChoice } from './../itemselector';
import { AppSettings } from './../app.settings';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {
   private projectListUrl = AppSettings.API_ENDPOINT + 'projects';
   private projectUrl = AppSettings.API_ENDPOINT + 'project/';
   constructor(private http: Http) {}

   projectList(): Promise<ItemChoice[]> {
      return this.http
         .get(this.projectListUrl)
         .toPromise()
         .then(res => res.json());
   };

   project(name: string): Promise<string> {
      return this.http
         .get(this.projectUrl + name)
         .toPromise()
         .then(res => res.json());
   }
}
