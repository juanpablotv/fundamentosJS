// Funciones de Orden Superior
// High Order Funtions 
// Funciones que resiben como parametros 
// mas funciones

const myFuntionWithBigName = () => {
    console.log('funcion inicial');
}

console.log(myFuntionWithBigName);
myFuntionWithBigName();

const myFun = myFuntionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Funcion Uno')
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta Funcion Dos');
}

funOne();
funTwo('Pablo');

const funThree = (otherFuntion) => {
    console.log('Inicia Funcion Tres');
    otherFuntion();
    console.log('Termina Funcion Tres');
}

funThree(funOne);
funThree(() => console.log ('Funcion De Flecha'));