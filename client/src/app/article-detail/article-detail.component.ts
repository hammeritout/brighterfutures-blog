import { Component, Input} from '@angular/core';
// import { Article } from './ArticleListComponent';
// added Input here
// import {ArticleListComponent} from '../article-list'
import {ArticleService} from '../article.service';
import {ActivatedRoute, RouterPreloader} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  // @Input() article;
  article = {
    id: 0,
    date: Date,
    title:'',
    body:''
  };

   constructor
   (private route: ActivatedRoute,
    private articleService:ArticleService)
     {
       var id = this.route.snapshot.paramMap.get('id');
         // Get the value of the id here that is selected from the list.
          console.log('the article id is', id);
          this.articleService.getArticle(id).then((article:any) =>{
          this.article = article;
          console.log('getArticle: %o', article);
           });
    }
}
