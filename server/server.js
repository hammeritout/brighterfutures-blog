const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.listen(8000);

console.log('Blog for Articles listening at http://localhost:8000');

const articles = [
    {_id: 1, date: new Date(), title:'Brighter Futures Foundation celebrates first anniversary',  body:'On Monday, April 23, the Brighter Futures Foundation in Wagoner celebrated its first anniversary with stories, cupcakes, games, laughter and lots of learning. The Foundation, also called BFF, is a division of Eternity Fraternity, a Christian teen 501©3 organization. It began as a Christian-based literacy program serving the Autumn Woods Apartments on Mondays.'},
    {_id: 2, date: new Date(),title:'The Brighter Futures Foundation in Wagoner served 108 children and families during the school stoppage April 2-13, 2018.', body:'The Foundation, a division of Eternity Fraternity Christian teen organization, opened its doors five days a week and expanded its service hours to provide a safe, nurturing and learning environment for youth while they were out of school. '},
    {_id: 3, date: new Date(), title:'Wagoner businesses Celebrate at Chamber Awards Banquet', body:'It was a night to celebrate the business of business Thursday, April 5 during the annual Wagoner Area Chamber of Commerce 2018 Awards Banquet. Brighter Futures was selected Heroes of the Year.'}
];

function getArticle(articleId){
var article =  articles.find(a=> {
     return a._id === articleId 
        
   })
   return article;
}


app.get('/articles', (req,res) =>{
    res.json(articles);
});

app.get('/articles/:id', (req,res) =>{
     getArticle(req.params.id)
    
    // .then(getArticles)
     .then(article =>res.json(article));
    res.json(article);

});
