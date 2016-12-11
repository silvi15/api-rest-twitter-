console.log('Welcome to my Api !');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//crea un tweeter con post en mi muro
T.post('statuses/update',
 {
    status: 'hello! My first tweet from my api :)'
  },
  function(err, data, response)
  {
    if(err){
      console.log('1)i cant creat my first tweet');
    }else{
      console.log('1)My first tweet by my api :)');
    }
})
//busca 2 los tweet que contengan node.js
T.get('search/tweets',
{
  q: 'node.js', count: 2
},
function(err, data, response) {
  if(err){
    console.log('2)i cant find the tweeter');
  }else{
      console.log('2)i found the last 3 tweet with node.js');
  }
})
//trae una lista con los ultimos 3 usuarios que siguieron a @node.js
T.get('followers/ids',
{
  screen_name: 'nodejs', count : 3
},
function (err, data, response) {
if(err){
  console.log('3)i cant find the list');
}else{
  console.log('3)i found the last 3 followers');
  }
})
//retweet tweet con id ...
T.post('statuses/retweet/:id',
  {
    id: '343360866131001234'
  },
   function (err, data, response)
   {
     if(err){
       console.log('4)i cant retweet');
     }else{
     console.log('4)retweet!');
     }
})
