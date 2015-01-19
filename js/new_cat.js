$(function(){

	var model = [{"name":"Nisha", "click_count":0, "url":"images/Nisha.jpg"}, {"name":"Angie", "click_count":0, "url":"images/Angie.jpg"}, {"name":"Charlie", "click_count":0, "url":"images/Charlie.jpg"}, {"name":"Oreo", "click_count":0, "url":"images/Oreo.jpg"}, {"name":"Pepsi", "click_count":0, "url":"images/Pepsi.jpg"}, {"name":"Amber", "click_count":0, "url":"images/Amber.jpg"}, {"name":"Molly", "click_count":0, "url":"images/Molly.jpg"}, {"name":"Milkshake", "click_count":0, "url":"images/Milkshake.jpg"}, {"name":"Lily", "click_count":0, "url":"images/Lily.jpg"}, {"name":"Ellie", "click_count":0, "url":"images/Ellie.jpg"}];

	var octopus = {
		init: function(){
			view_list.init();
			view_display.init();
			this.list_handler();
			this.display_handler();
		},

		get_cats: function(){
			return model;
		},

		"current_cat": model[0],

		list_handler: function(){
			for (cat in model){
				$('#'+model[cat].name).click((function(cat_copy){
					return function(event){
						view_display.render(model[cat_copy]);
						octopus.current_cat = model[cat_copy];
						//console.log(octopus.current_cat);
					};
				})(cat));
			}
		},

		display_handler: function(){
			$('#cat-area').on('click', 'img', function(event){
				octopus.current_cat.click_count++;
				view_display.render(octopus.current_cat);
			})
		}
	};

	var view_list = {
		render: function(cats){
			for (var i = 0; i<cats.length; i++) {
  				$('#cat-list').append("<button id='"+cats[i].name+"'> "+ cats[i].name + "</button>")
			};
		},
		init: function(){
			cat_list=octopus.get_cats();
			this.render(cat_list);
		}
	}

	var view_display = {
		render: function(current){
			$('#cat-area').empty();
			$('#cat-area').append("<h2 align='center'>"+current.name+"</h2><img src='images/"+current.name+".jpg' width='320' height='213'><p align='center'>You clicked on "+current.name+" "+current.click_count+" time!</p>");
		},

		init: function(){
			this.render(octopus.current_cat);
		}
	}

	octopus.init();
});