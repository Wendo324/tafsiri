
var wordDelay = parseInt(localStorage.getItem("wordDelay"));

window.onload = function(){

  if('webkitSpeechRecognition' in window){

  	var message = document.querySelector('#output');
  	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  	var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  	var grammar = '#JSGF V1.0;'
  	var recognition = new SpeechRecognition();
  	var speechRecognitionList = new SpeechGrammarList();

  	speechRecognitionList.addFromString(grammar, 1);

  	recognition.grammars = speechRecognitionList;
  	recognition.lang = 'en-US';
  	recognition.interimResults = false;
  	recognition.onresult = async function(event) {

  		document.getElementById("microphoneButton").className = "";
  		var last = event.results.length - 1;
  		var command = event.results[last][0].transcript;
  		words = convertToArray(command);

  		for(var i = 0; i < words.length; i++){

  			document.getElementById("output").innerHTML = words[i];
        speechTranscript += words[i] + " ";
        makeRedLetter(document.getElementById("output"));
  			await sleep(wordDelay);

  		}

  		document.getElementById("output").innerHTML = "";

  	};
  	recognition.onspeechend = function() {

  		recognition.stop();
  		document.getElementById("microphoneButton").className = "";

  	};
  	recognition.onerror = function(event) {

  		document.getElementById("microphoneButton").className = "";
  		//document.getElementById("output").value = 'Error occurred in recognition : ' + event.error;

  	}

  	document.querySelector('#microphoneButton').addEventListener('click', function(){

  		if(document.getElementById("microphoneButton").className == "activeMicrophone"){

  			recognition.stop();
  			document.getElementById("microphoneButton").className = "";

  		}

  		else{

  			recognition.start();
  			document.getElementById("microphoneButton").className = "activeMicrophone";

  		}

  	});

  }

  else{

  	document.getElementById("microphoneError").innerHTML = 'Your browser does not support voice recognition';

  }

}
