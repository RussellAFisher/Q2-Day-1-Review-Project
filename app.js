$(document).ready(function(){
  $("#drWho").click(function(event){
    event.preventDefault();
    var movie = $("#searchStuff").val().toLowerCase().replace(/\s+/g, '+');
    localStorage.setItem('movieChoice', movie);
    window.location="index2.html";
  });
});
