

window.addEventListener("load", function(){

	initateMemory();

	document.getElementById("delayPreview").innerHTML = localStorage.getItem("wordDelay");
	document.getElementById("delayInput").value = localStorage.getItem("wordDelay");

});

function refreshDelay(){

	localStorage.setItem("wordDelay", document.getElementById("delayInput").value);
	wordDelay = parseInt(localStorage.getItem("wordDelay"));

	document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));

}

function delayUp(){

	if(parseInt(localStorage.getItem("wordDelay")) != document.getElementById("delayInput").max){

		localStorage.setItem("wordDelay", parseInt(localStorage.getItem("wordDelay")) + 1);

		document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
		document.getElementById("delayInput").value = localStorage.getItem("wordDelay");

	}

}

function delayDown(){
	if(parseInt(localStorage.getItem("wordDelay")) != document.getElementById("delayInput").min){

		localStorage.setItem("wordDelay", parseInt(localStorage.getItem("wordDelay")) - 1);

		document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
		document.getElementById("delayInput").value = localStorage.getItem("wordDelay");

	}
}

function openMenu(){

	if(document.getElementById("sideMenu").offsetWidth == 0){

		document.getElementById("sideMenu").style.width = "200px";

	}

}

function closeMenu(){
	if(document.getElementById("sideMenu").offsetWidth != 0){

		document.getElementById("sideMenu").style.width = "0px";
		
	}
}
