import { Component } from '@angular/core';

import {ArticleService} from '../article.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent  {

  articles =[];
  article = {
    id: 0,
    date: Date,
    title:'',
    body:''
  };

  constructor(private articleService:ArticleService) {
    this.articleService.getArticles().then((articles:any) =>{
      this.articles = articles;
      console.log('getArticles: %o', articles);
    }); 
  }

    
  




}
