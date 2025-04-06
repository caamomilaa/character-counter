const typingInputElement = document.getElementById('typing-input');
const checkboxElement = document.getElementById('exclude-checkbox');
const characterCounterElement = document.getElementById('character-counter');
const wordCounterElement = document.getElementById('word-counter');
const sentenceCounterElement = document.getElementById('sentence-counter');
const readingTimeElement = document.getElementById('reading-time');

//tengo que coger el contenido del typing input y valorar las cosas
//Total characters > necesito cona consta del abacedario?
//Total word > por espacios
//Total sentence > por punto final

const countSpaces = text => {
	let spaces = 0;
	for (let i = 0; i < typingInputElement.length; i++) {
		if (typingInputElement.charAt(i) === ' ') {
			spaces++;
		}
	}
	console.log(`tiene ${spaces} espacios`);
};
typingInputElement.addEventListener('input', countSpaces);
