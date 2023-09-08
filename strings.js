let name = "Juan Pablo";
let lastname = "Torres";
let age = "18";

console.log("soy" + name + 'y mi apellido es' + lastname);

console.log("I'm" + name + " " + lastname);
console.log('I\'m' + name + " " + lastname);

// Imprimir soy juan pablo torres y tengo 18 años
// Strings Templates o Strings literals
// place holder ${}
console.log('soy ${name} ${lastname} y tengo ${age}');

//metodos y atributos para Strings
const texto = "Este Es uN TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);


