$(document).ready(function(){
  var movie = localStorage.getItem('movieChoice');
  console.log(movie);
  $.get("https://api.themoviedb.org/3/search/movie?query="+movie+"&api_key=3309faf8929f28dd01b5a031848d54e0").done(function(data){
    console.log(data);
    var movie1title = data.results[0].original_title;
    var movie1overview = data.results[0].overview;
    var movie1poster = data.results[0].poster_path;
    var movie2title = data.results[1].original_title;
    var movie2overview = data.results[1].overview;
    var movie2poster = data.results[1].poster_path;
    var movie3title = data.results[2].original_title;
    var movie3overview = data.results[2].overview;
    var movie3poster = data.results[2].poster_path;
    $(".image1").append("<h2>" + movie1title + "</h2><br>");
    $(".image2").append("<h2>" + movie2title + "</h2><br>");
    $(".image3").append("<h2>" + movie3title + "</h2><br>");

    $(".text1").append("<h3>" + movie1overview + "</h3><br>");
    $(".text2").append("<h3>" + movie2overview + "</h3><br>");
    $(".text3").append("<h3>" + movie3overview + "</h3><br>");
    console.log(movie1title);
    console.log(movie2title);
    console.log(movie3title);
  });
});
