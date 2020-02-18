// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton1 = document.querySelector('#b1');
var speakButton2 = document.querySelector('#b2');
var speakButton3 = document.querySelector('#b3');
var speakButton4 = document.querySelector('#b4');
var speakButton5 = document.querySelector('#b5');
var speakButton6 = document.querySelector('#b6');

// arrays
var nouns = ['the turkey', 'mom', 'dad', 'the teacher', 'the elephant', 'the cat'];
var verbs = ['sat on', 'ate', 'danced with','saw', 'doesn\'t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti','in my soup', 'on the grass', 'in my shoes'];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton1.onclick = function() {
	var randomReturn = Math.floor(Math.random() * 7);
	speakNow(nouns[randomReturn])
}
speakButton2.onclick = function() {
	var randomReturn = Math.floor(Math.random() * 7);
	speakNow(verbs[randomReturn]);
}
speakButton3.onclick = function() {
	var randomReturn = Math.floor(Math.random() * 7);
	speakNow(adjectives[randomReturn]);
}
speakButton4.onclick = function() {
	var randomReturn = Math.floor(Math.random() * 7);
	speakNow(nouns2[randomReturn]);
}
speakButton5.onclick = function() {
	var randomReturn = Math.floor(Math.random() * 7);
	speakNow(places[randomReturn]);
}

var randomReturn = Math.floor(Math.random() * 7);
var textToSpeak = nouns[randomReturn] + ' ' + verbs[randomReturn] + ' ' + adjectives[randomReturn] + ' ' + nouns2[randomReturn] + ' ' + places[randomReturn];
speakButton6.onclick = () => {
  speakNow(textToSpeak);
}
