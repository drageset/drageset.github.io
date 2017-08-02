//Make the NAV bar functional

var hamburger = document.getElementById('nav-icon3');
var hamwrapper = document.getElementById('ham-wrapper');
hamwrapper.addEventListener('click', function(e) {
	hamburger.classList.toggle("open");
	var hamMenu = document.getElementById('hamburger-nav');
	hamMenu.classList.toggle("hidden");
});