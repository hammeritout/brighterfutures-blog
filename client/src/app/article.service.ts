import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

//need array here.

  const articles = [{_id: 1, date: new Date(), title:'Futures Foundation celebrates first anniversary',  body:'On Monday, April 23, the Brighter Futures Foundation in Wagoner celebrated its first anniversary with stories, cupcakes, games, laughter and lots of learning. The Foundation, also called BFF, is a division of Eternity Fraternity, a Christian teen 501©3 organization. It began as a Christian-based literacy program serving the Autumn Woods Apartments on Mondays.'},
  {_id: 2, date: new Date(),title:'The Brighter Futures Foundation in Wagoner served 108 children and families during the school stoppage April 2-13, 2018.', body:'The Foundation, a division of Eternity Fraternity Christian teen organization, opened its doors five days a week and expanded its service hours to provide a safe, nurturing and learning environment for youth while they were out of school. '},
  {_id: 3, date: new Date(), title:'Wagoner businesses Celebrate at Chamber Awards Banquet', body:'It was a night to celebrate the business of business Thursday, April 5 during the annual Wagoner Area Chamber of Commerce 2018 Awards Banquet. Brighter Futures was selected Heroes of the Year.'}
];

@Injectable({
  providedIn: 'root'
})



export class ArticleService {

  // constructor(private articleService:ArticleService) {
  //   this.articleService.getArticles().then((articles:any) =>{
  //     this.articles = articles;
  //     console.log('getArticles: %o', articles);
  //   });   }

  constructor(private http:HttpClient) { }

  getArticles() { 
    return this.http.get('api/articles').toPromise();
}



getArticle(id) {
  return this.http.get('api/articles/'+id).toPromise();
}
 
saveArticle(article) {
  return this.http.post('api/articles/', article).toPromise();
}
}

 




