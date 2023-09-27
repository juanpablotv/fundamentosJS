const imputTarea = document.getElementById('imputTarea');
const listaTareas = document.querySelector('#tareas ul');
const imputTareas = document.getElementById('loadImage');
const image = document.getElementById('image');

function addImage(){
    const imagen = Imput.Image.value;
    image 
}
const lista = [];

const addTarea = () => {
    const tareaData = imputTarea.value;
    lista.push(tareaData);
    imputTarea.value = '';
    showlista();
}

const showlista = () => {
    let listaHtml = '';
    lista.forEach(listaitem => {
        listaHtml += `<li>${listaitem}</li>`;
    });
    listaTareas.innerHTML = listaHtml;

}
