"use strict";

function myFunction(){
	if (document.getElementById("testParagraph").innerHTML == "First Text"){
		document.getElementById("testParagraph").innerHTML = "Second Text";
	}else if (document.getElementById("testParagraph").innerHTML == "Second Text"){
		document.getElementById("testParagraph").innerHTML = concatStrings("First Text", "Second Text");
	}
	else{
		document.getElementById("testParagraph").innerHTML = "First Text";
	}
}

function concatStrings(firstString, secondString){
	return firstString + " " + secondString;
}