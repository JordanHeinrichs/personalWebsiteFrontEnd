import { Component, OnInit  } from '@angular/core';
import { ItemSelector, ItemChoice } from './../itemselector';
import { BlogContentService } from './blog-content.service';
import { BlogUrlService } from './blog-url-route.service';

@Component({
   selector: 'blogcontent',
   templateUrl: './blog-content.template.html',
   providers: [BlogContentService]
})
export class BlogContent implements OnInit {
   blogList: ItemChoice[];
   blogHtml: string;

   constructor(private blogContentService: BlogContentService) {
      this.blogList = null;
      this.blogHtml = '';
   }

   ngOnInit(): void {
      this.blogContentService.blogList()
         .then(blogList => this.blogList = blogList)
         .then(blogList => {
            // Always load the first blog
            this.onChoiceSelected(blogList[0]);
         });
   }

   onChoiceSelected(item: ItemChoice) {
      this.blogContentService.blog(item.name)
         .then(blog => this.blogHtml = blog)
         .catch((error: any) => this.blogHtml = 'Error: can not load blog.' );
   }
}
