

var cats = ["Nisha", "Angie", "Charlie", "Oreo", "Pepsi", "Amber", "Molly", "Milkshake"];

$(document).ready(function(){
	$('#cat1').find("h1").text(cats[0]);
	$('#cat2').find("h1").text(cats[1]);
});

var count_clicks = function(selector){
	selector.text()
}




var clicks = 0;
var clicks1 = 0;
$( "#cat1" ).click(function() {
  clicks++;
  $(this).find("p").text("You clicked on " + cats[0] + " " + clicks + " time!");
  if (clicks>1) {
  	$(this).find("p").text("You clicked on " + cats[0] + " " + clicks + " times!");
  }
});

$("#cat2").click(function(){
	clicks1++;
	$(this).find("p").text("You clicked on " + cats[1] + " " + clicks1 + " time!");
  	if (clicks>1) {
  		$(this).find("p").text("You clicked on " + cats[1] + " " +  clicks1 + " times!");
  }
})