(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var $section = $('section');
	$section.hide();

	$('#submit').click(function (e) {
		e.preventDefault();

		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var website = $('#website').val();
		var message = $('#text-area').val();

		if (name.length == 0) {
			error = true;
			$('#erName').show();
		} else {
			$('#erName').hide();
		}

		if (email.length == 0) {
			error = true;
			$('#erEmail').show();
		} else {
			$('#erEmail').hide();
		}

		if (website.length == 0) {
			error = true;
			$('#erWebsite').show();
		} else {
			$('#erWebsite').hide();
		}

		if (message.length == 0) {
			error = true;
			$('#erMessage').show();
		} else {
			$('#erMessage').hide();
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map