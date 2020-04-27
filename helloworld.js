// Exercici 1
console.log("Hello world!");

// Exercici 2
alert("Em dic Júlia!");

// Exercici 3
var name="Júlia";
var last_name="Rodríguez";

// Exercici 4
var number1 = 34;
var number2 = 56;
console.log('La suma entre ' + number1 + ' i ' + number2 + ' és ' + (number1+number2) + '.');

// Exercici 5
var  nota_examen = 0;
if (nota_examen >= 5) {
    alert('Molt bé! Has aprovat l\'examen amb un ' + nota_examen + '.');
} else {
    alert('Oh.. has suspès l\'examen amb un ' + nota_examen + '.' );
}

// Exercici 6
var frase = "Tinc un cotxe de color verd"; 
var frase = frase.replace("verd", "blau");
console.log(frase);

for (i = 0; i < frase.length; i++) {
    if (frase[i] === 'o'){
        frase = frase.replace("o","u");
    }
}
console.log(frase);


// Exercici 7
var objectes = ["taula", "cadira", "ordinador", "llibreta"];
for (i = 0; i < objectes.length; i++) {
    console.log('L\'objecte ' + objectes[i] + ' està a la posició ' + i);
}

// Exercici 8
function calculadora(operation, number1, number2){
if (operation === 'suma') {
    resultat = (number1 + number2);        
} else if ( operation === 'resta'){
    resultat = (number1 - number2);
} else {
    resultat = (number1 * number2);
}
alert('El resultat és ' + resultat + '.');
return resultat;
}
   

