const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(8001);

console.log('Blog server listening at 8001');

const articles = [{_id: 1, date: new Date(), title:'Futures Foundation celebrates first anniversary',  body:'On Monday, April 23, the Brighter Futures Foundation in Wagoner celebrated its first anniversary with stories, cupcakes, games, laughter and lots of learning. The Foundation, also called BFF, is a division of Eternity Fraternity, a Christian teen 501©3 organization. It began as a Christian-based literacy program serving the Autumn Woods Apartments on Mondays.'},
{_id: 2, date: new Date(),title:'The Brighter Futures Foundation in Wagoner served 108 children and families during the school stoppage April 2-13, 2018.', body:'The Foundation, a division of Eternity Fraternity Christian teen organization, opened its doors five days a week and expanded its service hours to provide a safe, nurturing and learning environment for youth while they were out of school. '},
{_id: 3, date: new Date(), title:'Wagoner businesses Celebrate at Chamber Awards Banquet', body:'It was a night to celebrate the business of business Thursday, April 5 during the annual Wagoner Area Chamber of Commerce 2018 Awards Banquet. Brighter Futures was selected Heroes of the Year.'}
];

function getArticles() {
    return Promise.resolve(articles); 
}

function getArticle(id) {
    var article = articles.find(a => a._id==id);
    return Promise.resolve(article); 
}

function saveArticle(article) {
    var foundArticle = articles.find(a => a._id==article._id);
    if(foundArticle) {
        foundArticle.title = article.title;
        foundArticle.body = article.body;
        foundArticle.date = article.date;
    } else{
        article._id = articles.length +1;
        articles.push(article);
    }
    return Promise.resolve(article);
}


app.get('/api/articles', (req,res) => {
  getArticles().then(articles => {
      res.json(articles);
  });  
});

app.get('/api/articles/:id', (req,res) => {
    console.log('req.params: %j', req.params);
    getArticle(req.params.id).then(article => {
        res.json(article);
    });  
  });

  app.post('/api/articles', (req,res) => {
    saveArticle(req.body).then(article => {
        res.json(article);
    });  
  });