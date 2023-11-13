
window.addEventListener("load", function(){

	initateMemory();

});

function initateMemory(){


	//Non real time voice rec

	if(localStorage.getItem("wordDelay") == null){

		localStorage.setItem("wordDelay", 200);

	}

}
