const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://shammer:sharyl01@ds259912.mlab.com:59912/okcoders-backend', {useNewUrlParser: true});

// creating the model of articles
const Articles = mongoose.model('Articles',
   {
     date: Date,
     title:String,
     body:String
});



app.use(bodyParser.json());

const port = process.env.PORT || 8001;

app.listen(port);

console.log('Blog server listening at %j!', port);

app.use('/',express.static('./client/dist/blog'));


function getArticles() {
    // return Promise.resolve(articles); 
    return Articles.find().sort({date:-1}).exec();
}

function getArticle(id) {
    return Articles.findById(id).exec(); 
//     var article = articles.find(a => a._id==id);
//     return Promise.resolve(article); 
}

function saveArticle(article) {
    if(!article._id) article=new Articles(article);
    return Articles.findByIdAndUpdate(article._id,article,
        {upsert:true, new:true}).exec();
    // var foundArticle = articles.find(a => a._id==article._id);
    // if(foundArticle) {
    //     foundArticle.title = article.title;
    //     foundArticle.body = article.body;
    //     foundArticle.date = article.date;
    // } else{
    //     article._id = articles.length +1;
    //     articles.push(article);
    // }
    // return Promise.resolve(article);
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