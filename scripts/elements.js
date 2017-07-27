/********************
* 	HTML elements	*
********************/

const portfolio = `<p>Watch this space!</p>`;

const about = `<p>Watch this space!</p>`;

const contact = `<p>You can reach me at <a href="mailto:olve.drageset@gmail.com">olve.drageset@gmail.com</a>, or <a href="https://www.linkedin.com/in/olvedrageset/">find me on linkedIn</a></p>`;

const joke = `<div id="joke" class="flex-vertical-centered">
			<p class="typing typing-0"></p>
			<p class="typing typing-1"></p>
			<br>
			<div id="alternatives" class="flex-centered">
				<div id="yes" class="square-button flex-centered glowing hidden">Sure!</div>
				<div id="no" class="square-button flex-centered glowing hidden">Nah</div>
			</div>
			<br>
			<p id="jokeOrNoJoke" class="hidden typing typing-2"></p>
			<p id="jokePunchline" class="hidden"><span>Ba</span><span>dum</span> <span>tssssh!</span></p>
		</div>`;

const jokeLoaded = `<div id="joke" class="flex-vertical-centered">
			<p class="typing typing-0">Hi there!</p>
			<p class="typing typing-1">Wanna hear a joke?</p>
			<br>
			<div id="alternatives" class="flex-centered">
				<div id="yes" class="square-button flex-centered glowing">Sure!</div>
				<div id="no" class="square-button flex-centered glowing">Nah</div>
			</div>
			<br>
			<p id="jokeOrNoJoke" class="hidden typing typing-2"></p>
			<p id="jokePunchline" class="hidden"><span>Ba</span><span>dum</span> <span>tssssh!</span></p>
		</div>`;

const jokeText = ["Hi there!","Wanna hear a joke?","Two drums and a cymbal fell off a cliff...","Well, then the joke's on you! (sorry, not sorry)"];

const resume = `
		<h1>Technologies (I like to work with)</h1>
		<div class="expanding">
			<p>Programming languages, dbs and other Technologies I know and like <p>
			<h3>Languages</h2>
			<ul>
				<li>Java</li>
				<li>JavaScript</li>
				<li>Python 3</li>
				<li>Prolog</li>
				<li>C# (Mono)</li>
			</ul>

			<h3>Database Technologies</h2>
			<ul>
				<li>MySQL</li>
				<li>SPARQL and Apache Jena TDB</li>
				<li>SQLite</li>
				<li>MongoDB</li>
			</ul>

			<h3>Web Technologies</h2>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>JSON</li>
				<li>Semantic Annotation with JSON-LD or RDFa</li>
			</ul>

			<h3>Other</h2>
			<ul>
				<li>Semantic Web technologies (RDF, RDF-S and OWL2)</li>
				<li>GIT version controll</li>
				<li>Unit testing</li>
			</ul>

			<h3>Development Environments</h2>
			<ul>
				<li>Jetbrains IntelliJ</li>
				<li>Sublime Text 3</li>
				<li>Android Studio</li>
				<li>Eclipse</li>
				<li>Unity 5</li>
			</ul>
		</div>
		
		<h1>Skills and profficiencies</h1>
		<div class="expanding">
			<h3>Development Skills</h3>
			<ul>
				<li>Algorithms and Datastructures</li>
				<li>Ontology Engineering</li>
				<li>Responsive Web Design</li>
				<li>Design Patterns</li>
				<li>Unity 2D game development</li>
				<li>Android Development</li>
			</ul>

			<p>Project management, algos, datastructures, logic etc?<p>
		</div>

		<h1>Education</h1>
		<div class="expanding">
			<h3>University of Bergen (UiB)</h2>
			<ul>
				<li>2014 - 2017</li>
				<li>Bachelor's degree in Cognitive Science with specialization in Information Science</li>
			</ul>
			<p class="hidden">A casual description of what i did and learned at UiB, in fagutvalget, as a teaching assistant</p>
		</div>

		<div class="expanding">
			<h3>United World College Red Cross Nordic</h2>
			<p>International Baccalaureate, 2011 - 2013</p>
			<p class="hidden">A casual description of my time at UWC, describing some of the activities and societies i took part in.</p>
		</div>

		<h1>Professional Experience</h1>
		<div class="expanding">
			<h3>Teaching Assistant</h2>
			<ul>
				<li>Spring 2017</li>
				<li>Client Programming (10 ECTS)</li>
			</ul>	
			<p class="hidden">A description of my time as a teaching assistant, what I learned and taught, and a link to my testemonial/recomendation.</p>
		</div>

		<div class="expanding">
			<h3>Soldier, private</h2>
			<ul>
				<li>August 2013 - July 2014</li>
				<li>Norwegian Engineer Btn.</li>
			</ul>
			<p class="hidden">In my time with the Heavy Combat Engineers I took on tasks in operating and maintaining a selection of radio communications systems, working security and observation, and completing prolonged missions in small teams without NCO supervision. I also had the honor of taking on the responsibility of being our platoon's representative (Troppstillitsvalgt).</p>
		</div>

		<div class="expanding">
			<h3>Co Founder, Co Manager</h2>
			<ul>
				<li>Hoeg Student Café, non profit</li>
				<li>October 2012 - April 2013</li>
			</ul>
		</div>
		
		<div><h1>Voulenteer Experience</h1></div>
		
		`;