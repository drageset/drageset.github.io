//Make the NAV bar functional

var hamburger = document.getElementById('nav-icon3');
var hamwrapper = document.getElementById('ham-wrapper');
hamwrapper.addEventListener('click', function(e) {
	hamburger.classList.toggle("open");
	var hamMenu = document.getElementById('hamburger-nav');
	hamMenu.classList.toggle("hidden");
});

var descriptionElements = document.body.querySelectorAll('.description');
console.log(descriptionElements);

var expandingElements = document.getElementsByClassName('expanding');
console.log(expandingElements);
console.log("elements list length:"+expandingElements.length);

for (var i = 0; i < expandingElements.length; i++) {
	var expandingElement = expandingElements[i];
	console.log(expandingElement);
	var descriptionElement = expandingElement.querySelector('.description');
	
	const clickFunc = function(e) {
		console.log(e.target);
		var expandingElement = findExpandingParent(e.target);
		console.log(expandingElement);
		expandingElement.querySelector('.description').classList.toggle('hidden');
	}
	
	if (descriptionElement) {
		console.log(descriptionElement);
		expandingElement.addEventListener('click',clickFunc);
	}
	
}

function findExpandingParent(element) {
	if (element.classList.contains('expanding')) {
		return element;
	} else if (element == document.body) {
		return null;
	} else {
		return findExpandingParent(element.parentElement);
	}
}

/*
for(expandingElement in expandingElements){
	var element = expandingElements[expandingElement];
	console.log("index: "+expandingElement);
	console.log("element: "+element);
	
	var description = element.querySelector('.description');
	element.addEventListener('click', function(e) {
		description.classList.toggle('hidden');
	});
}
*/