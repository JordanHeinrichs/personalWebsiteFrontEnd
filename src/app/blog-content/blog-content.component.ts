import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ItemSelector, ItemChoice } from './../itemselector';
import { BlogContentService } from './blog-content.service';
import { BlogUrlService } from './blog-url-route.service';

@Component({
   selector: 'blogcontent',
   styleUrls: ['./blog-content.component.css'],
   templateUrl: './blog-content.template.html',
   providers: [BlogContentService]
})
export class BlogContent implements OnInit {
   blogList: ItemChoice[];
   blogHtml: string;
   blogNameParam: string;

   constructor(private blogContentService: BlogContentService,
      private router: Router,
      private route: ActivatedRoute) {
      this.blogList = null;
      this.blogHtml = '';
      this.blogNameParam = null;
   }

   ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
         this.blogNameParam = params['name'];
         if (this.blogNameParam) {
            const item: ItemChoice = {name: this.blogNameParam, title: 'default', src: null};
            this.onChoiceSelected(item);
         }
      });

      this.blogContentService.blogList()
         .then(blogList => this.blogList = blogList)
         .then(blogList => {
            if (!this.blogNameParam) {
               // Always load the first blog if no parameter is set
               this.onChoiceSelected(blogList[0]);
            }
         });
   }

   onChoiceSelected(item: ItemChoice) {
      this.blogNameParam ? this.router.navigate(['../', item.name], { relativeTo: this.route }) :
         this.router.navigate([item.name], { relativeTo: this.route });
      this.blogContentService.blog(item.name)
         .then(blog => this.blogHtml = blog)
         .catch((error: any) => this.blogHtml = 'Error: can not load blog.' );
   }
}
