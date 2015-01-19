





var cat_clicks = {"Nisha":0, "Angie":0, "Charlie":0, "Oreo":0, "Pepsi":0, "Amber":0, "Molly":0, "Milkshake":0, "Lily":0, "Ellie":0};

var cats = ["Nisha", "Angie", "Charlie", "Oreo", "Pepsi", "Amber", "Molly", "Milkshake", "Lily", "Ellie"];



for (var i = 0; i<cats.length; i++) {
  $('#cat-list').append("<button id='"+cats[i]+"'> "+ cats[i] + "</button>")
};

for (var i=0; i<cats.length; i++){
  $('#'+cats[i]).click((function(j){
    return function(event){
      $("#cat-area").find('h2').text(cats[j]);
      $("#cat-area").find('img').attr({src:'images/'+cats[j]+'.jpg',id:'cat-'+j});
      $("#cat-area").find('p').text('You clicked on '+cats[j]+' '+ cat_clicks[cats[j]]+' times');
    };
  })(i));

  $('#cat-area').on('click', '#cat-'+i, {id:i}, function(event){
    cat_clicks[cats[event.data.id]]++
    $('#cat-area').find("p").text("You clicked on " + cats[event.data.id] + " " + cat_clicks[cats[event.data.id]] + " times!");
  });
}


