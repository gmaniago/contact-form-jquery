'use strict';

$(document).ready(function() {


	var $section = $('section');
	$section.hide();

	$('#submit').click(function (e) {
		e.preventDefault(); 

		var error = false; 
		var name = $('#name').val();
		var email = $('#email').val();
		var website = $('#website').val();
		var message = $('#text-area').val();

		if(name.length == 0) {
			error = true;
			$('#erName').show();
		}
		else {
			$('#erName').hide();
		}

		if (email.length == 0) {
			error = true;
			$('#erEmail').show();
		}
		else {
			$('#erEmail').hide();
		}

		if (website.length == 0) {
			error = true;
			$('#erWebsite').show();
		}
		else {
			$('#erWebsite').hide();
		}

		if(message.length == 0) {
			error = true;
			$('#erMessage').show();
		}
		else {
			$('#erMessage').hide();
		}

		
	});
})