
$(document).ready(loadQuotes);

var quotes = [];
var container;
var quoteTag;
var writerTag;

function loadQuotes(){
  container = $("#quote-container");
  quoteTag = container.find("p")[0];
  writerTag = container.find("cite")[0];
  console.log(quoteTag)
  var header = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' });
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30', {mode: 'cors', header: header})  
    .then(function(response) { return response.json(); })
    .then(function(response) { quotes = response; return 0; })
    .then(newQuotes)
    .catch(function(err) { console.log('Fetch Error', err); });;
}




function newQuotes(time){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex]
    container.fadeOut(time, changeQuote);
    function changeQuote() {
      quoteTag.innerHTML = randomQuote.content;
      writerTag.innerHTML = randomQuote.title;
      container.fadeIn(1000);
    }
}