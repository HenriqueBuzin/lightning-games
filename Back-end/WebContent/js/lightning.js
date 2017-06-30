
$(document).ready(function() {
	let users = {};
	let games = {};

	$.ajax({
		url : 'api/user',
		dataType : 'json',
		data : {},
		async : false,
		success : function(json) {
			users = json;
		}
	});

	$.ajax({
		url : 'api/game',
		dataType : 'json',
		data : {},
		async : false,
		success : function(json) {
			games = json;
		}
	});
	
	for(let i in users) {	
	    let name = users[i].name;
	    let image = users[i].image;
	    let email = users[i].email;
	     
	    let div = "<div class='user'>\
					<img src='images/" + image + "' class='user-image' /><br />\
					<span>" + name + "</span><br />\
					<span>" + email + "</span><br />\
					<span>Solicitar 200</span>\
				   </div>";
	     
	    $(".users").append(div);
	}

	let game = games.find(function(element) {
		return element.id === 1;
	});

	$(".game").append(
		"<img src='images/" + game.image + "' class='game-image' /><br />\
		 <span>" + game.name + "</span><br />\
		 <span>Número de Cópias : <b>" + game.quantity + "</b></span>"
	);
	
});
