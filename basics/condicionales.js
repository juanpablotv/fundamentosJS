//condicional if 
//if(exp){}
let age = 18; 
if(age = 18){
    console.log('Es mayor de edad');
}

//if(exp){} else{}
if(age = 18){
    console.log('Es mayor de edad');
} else {
    console.log('Es mayor de edad');
}

(age = 18)? console.log('Es mayor'): console.log('Es menor');

//if(exp){} else if{} (exp) else {}
let ppt = Math.random();
if(ppt  0.33){
    console.log('cayo piedra');
} else if(ppt  0.66){
    console.log('cayo papel');
} else(ppt  0.33){
    console.log('cayo tijera');
} 



// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es Domingo')
        break;
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es Martes')
        break;    
    case 3:
        console.log('Es Miercoles')
        break;    
    case 4:
        console.log('Es Jueves')
        break;  
    case 5:
        console.log('Es Viernes')
        break;
        default:
    case 6:
        console.log('Es Sabado')
        break;          
 }

// truthy and Falcy
// '' == false 
console.log( === true);
//'a' == false
console.log('a' === true );
//0 == false
console.log(0 === false );
//1 == true
console.log(1 === false );

// if ternario (exp)? true: false;


let username = '';
let defaultname;

if(username){
    defaultname = username;
} else {
    defaultname = 'extraño';
}
console.log(defaultname);

username = 'peter';
defaultname = username || 'extraño'
console.log(defaultname);