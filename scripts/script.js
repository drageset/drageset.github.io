//The typewriter types out text slowly to a given html element. 
//There should only be one TypeWriter existing at any given time in order to work as intended.
class TypeWriter {
	constructor(text, htmlElement){
		this.text = text;
		this.htmlElement = htmlElement;
		this.typingIndex = 0;
	}

	typeText() {
		if (this.typingIndex < this.text.length) {
			this.htmlElement.innerHTML += this.text.charAt(this.typingIndex);
			this.typingIndex++;
			setTimeout( 'type()', 80 ); //100ms between each 'keystroke'. The global function type() is used, as instance specific methods dont work with setTimeout
		} else {
			return true;
		}
	}
}

//Make the NAV bar functional
var main = document.getElementById('main');
main.innerHTML = joke;
var homeButton = document.getElementById('home');
homeButton.addEventListener('click', loadHome);
homeButton.className += ' clicked';
var aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', loadAbout);
var resumeButton = document.getElementById('resume');
resumeButton.addEventListener('click', loadResume);
var portfolioButton = document.getElementById('portfolio');
portfolioButton.addEventListener('click', loadPortfolio);
var contactButton = document.getElementById('contact')
contactButton.addEventListener('click', loadContact);

//Joke buildup
typer = new TypeWriter("Test", document.getElementById('main')); //'typer' is the single handle for the typewriter.
loadLanding();

// This method is used my the typewriter to continue typing. use typer.typeText() to start the typing process.
function type() {
	typer.typeText();
}

function unHide(element) {
	var oldClassName = element.className;
	var index = oldClassName.indexOf('hidden');
	if (index >= 0) {
		element.className = oldClassName.substring(0, index) + oldClassName.substring(index+7, oldClassName.length);
	}
}

function runJoke() {
	typer = new TypeWriter(jokeText[0], document.querySelector(".typing-0"));
	typer.typeText();
	setTimeout ( line2, 1300 );
}

function line2() {
	typer = new TypeWriter(jokeText[1], document.querySelector('.typing-1'));
	typer.typeText();
	setTimeout ( displayAlternatives, 2250 );
}

function displayAlternatives() {
	var tellMeJokeButton = document.getElementById('yes');
	var noJokeButton = document.getElementById('no');
	unHide(tellMeJokeButton);
	unHide(noJokeButton);
	tellMeJokeButton.addEventListener('click', tellMeJoke);
	noJokeButton.addEventListener('click', noJoke);
}

function tellMeJoke() {
	var jokeOrNoJoke = document.querySelector(".typing-2");
	unHide(jokeOrNoJoke);
	jokeOrNoJoke.innerHTML = '';
	typer = new TypeWriter(jokeText[2], jokeOrNoJoke);
	typer.typeText();
	setTimeout ( deliverPunchline, 4000 );
}

function prepPunchline() {
	unHide(document.getElementById('punchlineButton'));
	//TODO: Add event listener to puncline button
}

function deliverPunchline() {
	unHide(document.getElementById('jokePunchline'));
}

function noJoke() {
	var jokeOrNoJoke = document.querySelector(".typing-2");
	unHide(jokeOrNoJoke);
	jokeOrNoJoke.innerHTML = '';
	typer = new TypeWriter(jokeText[3], jokeOrNoJoke);
	typer.typeText();
}

function click(button) {
	unclick(homeButton);
	unclick(aboutButton);
	unclick(resumeButton);
	unclick(portfolioButton);
	unclick(contactButton);
	if (!button.className || !button.className.includes('clicked')) {
		button.className += ' clicked';
	}
}

function unclick(button) {
	var oldClassName = button.className;
	var index = oldClassName.indexOf('clicked');
	if (index > 0) {
		button.className = oldClassName.substring(0, index) + oldClassName.substring(index+7, oldClassName.length);
	}
}

/*
// Here you can put in the text you want to make it type.
function type(text, htmlElement, typingIndex)
{
if (typingIndex < text.length) {
	htmlElement.innerHTML += text.charAt(typingIndex);
	typingIndex++;
	var t = setTimeout( 'continueTyping', 100); //100ms between each 'keystroke'
}
function continueTyping() {
	type(text, htmlElement, typingIndex);
}
// The time taken for each character here is 100ms. You can change it if you want.
}

*/

function loadLanding() {
	main.innerHTML = joke;
	main.className = 'flex-vertical-centered';

	var tellMeJokeButton = document.getElementById('yes');
	tellMeJokeButton.addEventListener('click', tellMeJoke);
	var noJokeButton = document.getElementById('no');
	noJokeButton.addEventListener('click', noJoke);

	var punchlineButton = document.getElementById('punchlineButton');
	punchlineButton.addEventListener('click', deliverPunchline);

	runJoke();
}

function loadHome(e) {
	main.innerHTML = jokeLoaded;
	main.className = 'flex-vertical-centered';
	click(e.target);

	var tellMeJokeButton = document.getElementById('yes');
	tellMeJokeButton.addEventListener('click', tellMeJoke);
	var noJokeButton = document.getElementById('no');
	noJokeButton.addEventListener('click', noJoke);

	var punchlineButton = document.getElementById('punchlineButton');
	punchlineButton.addEventListener('click', deliverPunchline);
}

function loadAbout(e) {
	main.innerHTML = about;
	main.className = 'flex-vertical-centered';
	click(e.target);
}

function loadResume(e) {
	main.innerHTML = resume;
	main.className = '';
	click(e.target);
}

function loadPortfolio(e) {
	main.innerHTML = portfolio;
	main.className = 'flex-vertical-centered';
	click(e.target);
}

function loadContact(e) {
	main.innerHTML = contact;
	main.className = 'flex-vertical-centered';
	click(e.target);
}




