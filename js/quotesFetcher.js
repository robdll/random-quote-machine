window.onload = loadQuotes();

var quotes = [];


function loadQuotes(){
  var header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
  });
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30', {mode: 'cors', header: header})  
    .then(function(response) { return response.json(); })
    .then(function(response) { quotes = response; })
    .then(newQuotes)
    .catch(function(err) { console.log('Fetch Error', err); });;
}

function newQuotes(){
    var container = document.getElementById('quote-container');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex]
    container.innerHTML = randomQuote.content;
    var cite = document.createElement("cite");
    cite.innerHTML = randomQuote.title;
    container.prepend(cite);
}