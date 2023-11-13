
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, ms);
  });
}

function convertToArray(str){

	var spaces = 1;

	for(var i = 0; i < str.length; i++){
		if(str.substring(i, i + 1) == " "){
			spaces++;
		}
	}

	var endpoint = new Array(spaces);

	for(var i = 0; i < spaces; i++){
		endpoint[i] = str.substring(0, str.indexOf(" "));
		str = str.substring(str.indexOf(" ") + 1);
		if(i == spaces - 1){
			endpoint[i] = str;
		}
	}

	return endpoint;

}

function toggleTranscriptView(){

  if(textTranscript == ""){
    document.getElementById("textTranscriptOutput").innerHTML = "Nothing typed yet";
  }
  else{
    document.getElementById("textTranscriptOutput").innerHTML = textTranscript;
  }

  if(speechTranscript == ""){
    document.getElementById("speechTranscriptOutput").innerHTML = "Nothing said yet";
  }
  else{
    document.getElementById("speechTranscriptOutput").innerHTML = speechTranscript;
  }

  $(document).ready(function(){

    $("#transcriptView").slideToggle(750);

  });

}

function closeTranscriptView(){

  $(document).ready(function(){

    $("#transcriptView").slideUp(750);

  });

}

function extractMiddle(str) {

    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    }
    else {
        position = str.length / 2 - 1;
        length = 2;
    }

    return [str.substring(position, position + length), position];
}

function makeRedLetter(ele){

  eleText = ele.innerHTML;
  middle = extractMiddle(eleText.substring())[0];
  middlePosition = Math.floor(extractMiddle(eleText.substring())[1])
  middle.length == 2 ? middle = middle.substring(0, 1) : null;
  console.log(middle + " : " + middlePosition);
  ele.innerHTML = ele.innerHTML.substring(0, middlePosition) + '<span style="color: red;">' + middle
  + '</span>' + ele.innerHTML.substring(middlePosition + 1, ele.innerHTML.length);

}

document.addEventListener('click', function(event) {
  var isClickInside = document.getElementById("sideMenu").contains(event.target);

  if (!isClickInside) {

    closeMenu();

  }
});
