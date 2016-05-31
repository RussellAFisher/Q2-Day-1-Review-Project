$(document).ready(function(){
  $("#drWho").click(function(event){
    event.preventDefault();
    var movie = $("#searchStuff").val().toLowerCase().replace(/\s+/g, '+');
    console.log(movie);
    $.get("http://api.themoviedb.org/3/search/movie?query="+movie+"&api_key=3309faf8929f28dd01b5a031848d54e0").done(data);
  });
});
