// los objetos nos permiten almacenar datos 
// a partir de una clave 
/*
mi objeto = { clave: valor, 'clave': vallor }
miObjeto.clave
miObjeto['clave']
*/
const subject = {
    name: 'Programación',
    totalHours: 90,
    weekHours:7,
    classroom:'Lab Progra',
    teacher: 'Jose Manuel',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab Progrmación 1';
console.log(subject.classroom);

console.log(subject);

subject['teorical hours']  = 30;
console.log(subject);

const group = {
    name: "4C",
    career: "TIADSM",
    subjects: [
    subject
    ],
    students: [
        { name: "Gael", lastName: "Perez" },
        { name: "Juan", lastName: "Sanchez" },
        { name: "Dani", lastName: "Alvarez" },
    ]
};

 console.log(group);
 console.log(group.students);



  

