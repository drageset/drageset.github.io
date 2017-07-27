//Make the NAV bar functional

var hamburger = document.getElementById('nav-icon3');
hamburger.addEventListener('click', function(e) {
	hamburger.classList.toggle("open");
	var hamMenu = document.getElementById('hamburger-nav');
	hamMenu.classList.toggle("hidden");
});