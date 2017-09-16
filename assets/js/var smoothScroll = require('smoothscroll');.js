var smoothScroll = require('smoothscroll');
var exampleBtn = document.getElementById('prospective-btn');
var exampleDestination = document.getElementById('prospective-students');

// This function can easily be an onClick handler in React components
var handleClick = function(event) {
	console.log(3);
	event.preventDefault();
	smoothScroll(exampleDestination);
};

exampleBtn.addEventListener('click', handleClick);