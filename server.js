//Entry point for Express server

const express = require('express');
const hbs = require('express-handlebars').create({defaultLayout:'main.hbs'});
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const router = express.Router();


app.use(compression());
app.use(helmet());
app.use(express.static(__dirname +'/assets/'));

//setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/',(request,response)=>{
  response.render('home',{title: 'Home | PWM'});
});

app.get('/about',(request,response)=>{
  response.render('about',{title: 'About | PWM'});
});

app.listen(3000,()=>console.log('Express server started at port 3000'));
