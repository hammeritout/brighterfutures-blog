import { Component } from '@angular/core';

import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent  {
    article;
    constructor(private route:ActivatedRoute,private router:Router, private  articleService:ArticleService) {
        var id = route.snapshot.paramMap.get('id');
        console.log('ArticleEditComponent id=%o', id);
        // if it doesn't exist
        if(id==='new'){
          this.article = {
            date: '',
            title:'',
            body:''
          };
          // if the article exists then in edit mode.
        } else{
          this.articleService.getArticle(id).then(article => {
            this.article = article;
          });
        }
        
    }
  parseDate(str){
    return new Date(str);

  }

  save() {
    this.articleService.saveArticle(this.article).then(article =>{
      this.router.navigate(['/articles']);
    });
  }

}
