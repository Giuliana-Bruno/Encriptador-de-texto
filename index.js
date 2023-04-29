if(texto[i] == 'a'){
    out += traduccion["a"] ;
}
else if(texto[i] == 'e'){
    out += traduccion["e"];
}
else if(texto[i] == 'i'){
    out += traduccion["i"]; 
}
else if(texto[i] == 'o'){
    out += traduccion["o"]; 
}
else if(texto[i] == 'u'){
    out += traduccion["u"]; 
}
else{
    out += texto[i];
}

function demoDisplay() {
    document.getElementById("myP1").style.display = "none";
}               
function demoVisibility() {
    document.getElementById("myP2").style.visibility = "hidden";
}

