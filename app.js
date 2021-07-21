const words = ["I.", "am.", "Adeuti Busayo.", "HTML.", "javascript."];
let i = 0;
let timer;


function typingeffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0){
			document.getElementById('word').innerHTML +=word.shift();
		}else {
			delectEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect(){
	let word = words[i].split("");
	var loopDeleting = function() {
		if(word.length > 0) {
			word.pop();
			document.getElementById("word").innerHTML= word.join("");
		} else{
			if (words.length > (i + 1)) {
				i++;
			}else{
				i = 0;
			};
			typingeffect();
			return false;
		};
		timer = setTimeout (loopDeleting, 100);
	};
	loopDeleting();
};
typingeffect()