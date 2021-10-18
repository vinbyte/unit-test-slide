/**
 * @file
 * Initialize the Reveal handler.
 */

(function () {
	// Use a random theme if reveal container has 'pattern--random' class.
	const themes = [
		'hills',
		'indigo',
		'molecules',
		'night-sky',
		'orange-river',
		'palette',
		'playground',
		'pop',
		'quilt',
		'stream',
		'stripes',
		'waterfall',
		'waves',
	];
	document.addEventListener('DOMContentLoaded', function () {
		const reveal = document.getElementsByClassName('reveal').item(0);
		if (!reveal.classList.contains('pattern--random')) {
			return;
		}

		reveal.classList.forEach(function (value) {
			if (value.substr(0, 7) === 'pattern') {
				reveal.classList.remove(value);
			}
		});
		const index = Math.floor(Math.random() * themes.length);
		reveal.classList.add('pattern--' + themes[index]);
	});


	// More info about config & dependencies:
	// - https://github.com/hakimel/reveal.js#configuration
	// - https://github.com/hakimel/reveal.js#dependencies
	Reveal.initialize({
		center: false,
		width: "100%",
		height: "100%",
		margin: 0,
		minScale: 1,
		maxScale: 1,
		history: true,

		plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
		
		// enable the slide number
		slideNumber: 'c/t'
	});
}());
