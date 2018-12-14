for(let i = 1; i <= 7; i++) {
	let text = '';
	for(let j = 1; j <= i; j++) {
		text += '#';
	}
	let innerContent = document.getElementById('display-triangle').innerHTML;
	document.getElementById('display-triangle').innerHTML = `${innerContent} ${text} <br>`; 
}