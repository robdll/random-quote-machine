
$(document).ready(loadQuotes);

var quotes = quotes= [{ content: 'Sometimes API fetch goes wrong and you\ are left with a nonsensical quote.', title: 'Rob.dll' }];
var container;
var quoteTag;
var writerTag;
var currentQuote;

function loadQuotes() {
  container = $("#quote-container");
  quoteTag = container.find("p")[0];
  writerTag = container.find("cite")[0];
  var header = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' });
  fetch('https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=30', {mode: 'cors', header: header})  
    .then(function(response) { return response.json(); })
    .then(function(response) { quotes = response; return 0; })
    .then(newQuotes)
    .catch(function(err) { 
      addStaticQuotes();
      newQuotes(0); 
    });
}

function newQuotes(time){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex)
  var randomQuote = quotes[randomIndex]
  console.log(randomQuote)
  container.fadeOut(time, changeQuote);

  function changeQuote() {
    currentQuote = {
      text: randomQuote.yoast_head_json.og_description,
      artist: randomQuote.title.rendered
    }
    quoteTag.innerHTML = currentQuote.text;
    writerTag.innerHTML = currentQuote.artist;
    container.fadeIn(1000);
  }
}

function addStaticQuotes(){
  quotes = [
    { content: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared." , title: "Buddha" },
    { content: "Success is going from failure to failure without losing enthusiasm." , title: "Winston Churchill" },
    { content: "The way to love anything is to realize that it may be lost." , title: "Gilbert K. Chesterton" },
    { content: "If one dream should fall and break into a thousand pieces, never be afraid to pick one of those pieces up and begin again" , title: "Flavia Weedn" },
    { content: "You get treated in life the way you teach people to treat you." , title: "Wayne Dyer" },
    { content: "Life is very interesting. In the end, some of your greatest pains become your greatest strengths" , title: "Drew Barrymore" },
    { content: "If you always do what you’ve always done, you’ll always get what you always got." , title: "Mark Twain" },
    { content: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world." , title: "Lucille Ball" },
    { content: "It takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death" , title: "Eleanor Roosevelt" },
    { content: "Arguing with a fool proves there are two" , title: "Doris M. Smith" },
    { content: "Wealth is the ability to fully experience life." , title: "Henry David Thoreau" },
    { content: "Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials." , title: "Lin Yutang" },
  ];
}

function tweet() {
  var y = window.top.outerHeight / 2 + window.top.screenY - ( 400 / 2);
  var x = window.top.outerWidth / 2 + window.top.screenX - ( 550 / 2);
  var tweet = (currentQuote.text+' - '+currentQuote.artist).replace(/ /g,'%20');
  window.open("https://twitter.com/intent/tweet?text="+tweet, "_blank", "width=550, height=400, top="+y+", left="+x);
}