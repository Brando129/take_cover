/*Create a function that finds the word "bomb" in the given string (not case sensitive).
If found, return "Duck!!!", otherwise return "There is no bomb, relax.".*/

function bomb(str) {
	if (str.toLowerCase().includes('bomb')) {
		return 'Duck!!!'
	} else {
		return 'There is no bomb, relax.'
	}
}

console.log(bomb('We have not found anything to worry about.'))