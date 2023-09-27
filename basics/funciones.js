function saluda(){
    console.log('hola');
}

saluda();

//funciones con parametros sin retorno 

const saludaA = function(name){
    console.log('hola ' + name);
}
saludaA('Clark kent');

// funciones con parametros y retorno
const fact = function (num) {
    if(num === 0) return 1;
    return fact(num -1) * num;
}

const result = fact(5);
console.log(result);

// Arrow funtions o funciones de flecha
// sin parametros y sin retorno 
const saludaEnChino = () => {
    console.log('Ni Hao');
}
 saludaEnChino();

//con 1 parametro sin retorno 
const mayuscula = (Word) =>{
    console.log(Word.toUperCase)
}
mayuscula('hola')

const minuscula =

// Dos o mas parametros y con retorno

const fullName = (firstName, lastName) => {
    return firstName + '' + lastName;
}
const nombreCompleto = fullName('Bruce', 'Wayne');
console.log(nombreCompleto);

// sin el return es la unica linea que se pueda simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/* function duplica(num){
    return num * 2;
}
*/

// Funciones con parametros opcinales

const welcomeToMexico = (user = 'Invitado') => {
    console.log('Bienvenido a Mexico ${ user }');
}

welcomeToMexico();
welcomeToMexico("Batman");

// parametros con nombre 
const welcomeToUtt = (user = 'Invitado',
                    city = 'Mexico' ) => {
         console.log('Bienvenido ${ user } de $ {city}')
                    } 

welcomeToUtt();
welcomeToUtt('Bruce Wayne', 'Gotham');
welcomeToUtt(city = 'Metropolis', user =' Superman' );