function cambiarARojo(){
let laCabeza = document.getElementById('cabezaDragon');
laCabeza.setAttribute('class', 'cabezaRojo');

}


let cambiarAVerde = ()=>{
    let laCabeza = document.getElementById('cabezaDragon');
    laCabeza.setAttribute('class', 'cabezaVerde');
}

let cambiarTodo= ()=>{
    let elDragon = document.getElementsByTagName('g');
    elDragon[0].setAttribute('class', 'colorRosa');
}