//The typewriter types out text slowly to a given html element. 
//There should only be one TypeWriter existing at any given time in order to work as intended.

class TypeWriter {
	constructor(text, htmlElement, typingDelay){
		this.text = text;
		this.htmlElement = htmlElement;
		this.typingDelay = typingDelay;
		this.typingIndex = 0;
	}

	typeText() {
		if (this.typingIndex < this.text.length) {
			this.htmlElement.innerHTML += this.text.charAt(this.typingIndex);
			this.typingIndex++;
			setTimeout( 'type()', typingDelay ); // The global function type() is used, as instance specific methods dont work with setTimeout
		} else {
			return true;
		}
	}
}

//Joke buildup
var typingDelay = 50; //ms delay between each stroke
typer = new TypeWriter("Test", document.getElementById('main'), typingDelay); //'typer' is the single handle for the typewriter.
var tellMeJokeButton = document.getElementById('yes');
tellMeJokeButton.addEventListener('click', tellMeJoke);
var noJokeButton = document.getElementById('no');
noJokeButton.addEventListener('click', noJoke);

const jokeText = ["Hi!","Wanna hear a joke?","Two drums and a cymbal fell off a cliff...","Well, then the joke's on you! (sorry, not sorry)"];

runJoke();

// This method is used my the typewriter to continue typing. use typer.typeText() to start the typing process.
function type() {
	typer.typeText();
}

function unHide(element) {
	var oldClassName = element.className;
	var index = oldClassName.indexOf('hidden');
	if (index >= 0) {
		element.classList.toggle('hidden');
	}
}

function hide(element) {
	var oldClassName = element.className;
	var index = oldClassName.indexOf('hidden');
	if (!(index >= 0)) {
		element.classList.toggle('hidden');
	}
}

function runJoke() {
	typer = new TypeWriter(jokeText[0], document.querySelector(".typing-0"), typingDelay);
	typer.typeText();
	setTimeout ( line2, jokeText[0].length * typingDelay + typingDelay );
}

function line2() {
	typer = new TypeWriter(jokeText[1], document.querySelector('.typing-1'), typingDelay);
	typer.typeText();
	setTimeout ( displayAlternatives, jokeText[1].length * typingDelay + typingDelay );
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
	hide(document.getElementById('jokePunchline'));
	var jokeOrNoJoke = document.querySelector(".typing-2");
	unHide(jokeOrNoJoke);
	jokeOrNoJoke.innerHTML = '';
	typer = new TypeWriter(jokeText[2], jokeOrNoJoke);
	typer.typeText();
	setTimeout ( deliverPunchline, 3500 );
}

function deliverPunchline() {
	unHide(document.getElementById('jokePunchline'));
}

function noJoke() {
	hide(document.getElementById('jokePunchline'));
	var jokeOrNoJoke = document.querySelector(".typing-2");
	unHide(jokeOrNoJoke);
	jokeOrNoJoke.innerHTML = '';
	typer = new TypeWriter(jokeText[3], jokeOrNoJoke);
	typer.typeText();
}