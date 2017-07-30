$(document).ready(function(){

  var isShiningTweet = false;
  var isShiningRefresh = false;

  $("#spinner").mouseenter(function() {
      $("#spinner").addClass("rotate");
  });

  $("#spinner").mouseleave(function() {
      $("#spinner").removeClass( "rotate");
  });

  $("#scaler").mouseenter(function() {
    $("#scaler").addClass("scale");
  });

  $("#scaler").mouseleave(function() {
      $("#scaler").removeClass("scale");
  });

  $(".fa-twitter").click(function() {
    if(!isShiningTweet){
      isShiningTweet = true;
      $(".fa-twitter").addClass("enlight");
      setTimeout(function() { 
        $(".fa-twitter").removeClass("enlight"); 
        isShiningTweet = false;
      }, 1000 )
    }
  });

  $(".fa-refresh").click(function() {
    if(!isShiningRefresh){
      isShiningRefresh = true;
      $(".fa-refresh").addClass("enlight");
      setTimeout(function() { 
        $(".fa-refresh").removeClass("enlight"); 
        isShiningRefresh = false;
      }, 1000 );
    }
  });

})