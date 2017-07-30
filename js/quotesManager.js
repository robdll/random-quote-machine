
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
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30', {mode: 'cors', header: header})  
    .then(function(response) { return response.json(); })
    .then(function(response) { quotes = response; return 0; })
    .then(newQuotes)
    .catch(function(err) { newQuotes(0); });
}

function newQuotes(time){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex]
  container.fadeOut(time, changeQuote);
  function changeQuote() {
    currentQuote = randomQuote.content.replace(/<\/?p>/g,'').replace(/\. /g,'.<br>').replace(/—/g,' ');
    quoteTag.innerHTML = currentQuote;
    writerTag.innerHTML = randomQuote.title;
    container.fadeIn(1000);
  }
}

function tweet() {
  var y = window.top.outerHeight / 2 + window.top.screenY - ( 400 / 2);
  var x = window.top.outerWidth / 2 + window.top.screenX - ( 550 / 2);
  window.open("https://twitter.com/intent/tweet?text="+currentQuote.replace(/ /g,'%20'), "_blank", "width=550, height=400, top="+y+", left="+x);
}