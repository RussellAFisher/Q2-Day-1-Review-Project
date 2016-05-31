$(document).ready(function(){
  console.log("rawr");
  $("#drWho").click(function(event){
    console.log("blah");
    event.preventDefault();
    var movie = $("#searchStuff").val();
    console.log(movie);
  });
});


// .replace(/\s+/g, '')
