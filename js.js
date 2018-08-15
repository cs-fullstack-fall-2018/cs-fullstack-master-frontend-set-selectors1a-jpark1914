/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/
var bodyz = document.getElementsByTagName("body");
bodyz[0].style.backgroundColor = "#bdc3c7";

/* Make the <h1> element #9b59b6*/
var hOne = document.getElementsByTagName("h1");
hOne[0].style.color = "#9b59b6";



/* Make all <h2> elements orange */
var hTwoz = document.querySelectorAll("h2");
for(var c = 0; c < hTwoz.length; c++){
    hTwoz[c].style.color = "orange";
}

/* Make all <li> elements blue(pick your own hexadecimal blue)*/

var lil = document.getElementsByTagName("li");
for(var i = 0; i<lil.length; i++){
    lil[i].style.color = "#323fde";
}

/*Change the background on every paragraph to be yellow*/
var pTags = document.getElementsByTagName("p");
for( var x = 0; x < pTags.length; x++){
    pTags[x].style.backgroundColor = "yellow";
}


/*Make all inputs have a 3px red border*/
var inputo = document.getElementsByTagName("input");
for(var x = 0; x < inputo.length; x++){
    inputo[x].style.border = "3px solid red";
}

/* Give everything with the class 'hello' a white background*/
var classy = document.getElementsByClassName("hello");
for(var x = 0; x<classy.length; x++){
    classy[x].style.backgroundColor = "white";
}

/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/
var youSpecial = document.getElementById("special");
youSpecial.style.border = "2px solid #ADD8E6";


/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
var innerP = document.querySelectorAll("div p");
for(var x = 0; x <innerP.length; x++){
    innerP.style.fontsize("25px");
}