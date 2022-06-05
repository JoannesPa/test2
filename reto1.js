let word1, word2;
word1 = prompt("Es un anagrama?");
word2 = prompt("Es un anagrama?");

const invertirCadena = cadena => cadena.split("").reverse().join("");

let anagrama1 = invertirCadena(word1);
let anagrama2 = invertirCadena(word2);

if(word1 == anagrama1){
    document.write(word1+ " es un anagrama </br>");
}else{
    document.write(word1 + " no es un anagrama </br>");
}

if(word2 == anagrama2){
    document.write(word2 + " es un anagrama </br>");
}else{
    document.write(word2 + " no es un anagrama </br>");
}


