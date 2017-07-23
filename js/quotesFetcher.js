var header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data'
});

function newQuotes(){
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {mode: 'cors', header: header})  
  .then(function(response) {
      return response.json();
    })
  .then(function(response) {  
    var container = document.getElementById('quote-container');
    container.innerHTML = response[0].content;
    var cite = document.createElement("cite");
    cite.innerHTML = response[0].title;
    container.prepend(cite);
  })  
  .catch(function(err) {  
    console.log('Fetch Error', err);  
  });
}