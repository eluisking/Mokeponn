const seleccionAtaque = document.getElementById('select-ataque');
const seleccionReset = document.getElementById('sec-reset');
const btnMascotaJugador = document.getElementById('btn-mascota');
const btnFuego = document.getElementById('btn-fuego');
const btnAgua = document.getElementById('btn-agua');
const btnTierra = document.getElementById('btn-tierra');
const btnReset = document.getElementById('btn-reset');
const ataqueEnemigo = document.getElementById('ataque-enemigo');
const seleccionMascota = document.getElementById('select-mascota');

//Variables de los checkbox
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatihuella = document.getElementById('ratiguella');
const mascotaJug = document.getElementById('mascota-jug');
const mascotaEnemi = document.getElementById('mascota-enemi');

const resultado = document.getElementById('resultado');
const ataqueJugador = document.getElementById('ataque-jugador');

//Para mostrar vidas
const vidasJugador = document.getElementById('vida-jug');
const vidasEnemigo = document.getElementById('vida-enemi');



let ataqueJug;
let ataqueEnemi;
let vidasJug = 3;
let vidasEnemi = 3;

//Funcion cuando carge la pagina
function inicarJuego(){
    //Ocultamos contenido
    seleccionAtaque.style.display = 'none';
    seleccionReset.style.display = 'none';
    //Boton seleccionar mascota
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    //Botones de ataque
    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);
    //btn-reset;
    btnReset.addEventListener('click', reset);

}


//Logica seleccionar mascota
function seleccionarMascotaJugador(){
    //Validamos cual opcion esta seleccionada
    if(inputHipodoge.checked){
        mascotaJug.innerHTML = "Hipodoge";
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Hipodoge!");
    }else if(inputCapipepo.checked){
        mascotaJug.innerHTML = "Capipepo";
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Capipepo!");
    }else if(inputRatihuella.checked){
        mascotaJug.innerHTML = "Ratiguella";
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Ratiguella!");
    }else{
        alert("Selecciona una mascota!");
        seleccionReset.style.display = 'none';
        seleccionAtaque.style.display = 'none';
        seleccionMascota.style.display = 'flex';
    }

    //LLama la funcion de seleccion del enemigo 
    seleccionarMascotaEnemigo();

}

//Esta funcion genera la mascota aleaoria del enemigo
function seleccionarMascotaEnemigo(){
    //Llama la funcion aleatorio y la guarda en una variable
    let nAleaortio = aleatorio(1,3);

    if(nAleaortio == 1){
        mascotaEnemi.innerHTML = "Hipodoge";
        //alert("Has seleccionado Hipodoge!");
    }else if(nAleaortio == 2){
        mascotaEnemi.innerHTML = "Capipepo";
        //alert("Has seleccionado Capipepo!");
    }else if(nAleaortio == 3){
        mascotaEnemi.innerHTML = "Ratiguella";
        //alert("Has seleccionado Ratiguella!");
    }

    //console.log(nAleaortio);

};


//Funciones de asignacion de ataque
function ataqueFuego(){
    ataqueJug = "Fuego";
    fataqueEnemi();
    //alert("Elejiste: " + ataqueJug);
};

function ataqueTierra(){
    ataqueJug = "Tierra";
    fataqueEnemi();
    //alert("Elejiste: " + ataqueJug);
};

function ataqueAgua(){
    ataqueJug = "Agua";
    fataqueEnemi();
    //alert("Elejiste: " + ataqueJug);
};


//Ataque del jugador
function fataqueEnemi(){
    let aAleaoria = aleatorio(1,3);

    if(aAleaoria == 1){
        ataqueEnemi = "Fuego";
        //alert("Enemigo: " + ataqueEnemi);
    }else if(aAleaoria == 2){
        ataqueEnemi = "Agua";
        //alert("Enemigo: " + ataqueEnemi);
    }else if(aAleaoria == 3){
        ataqueEnemi = "Tierra";
        //alert("Enemigo: " + ataqueEnemi);
    }

    //Llamamos la funcion para crear mensaje
    crearMensaje();

}

//Funcion crear mensaje de ataque
function crearMensaje(){
    let nuevoAtaqueJ= document.createElement('p');
    let nuevoAtaqueE= document.createElement('p');
    //let notificacion= document.createElement('p');
    
    nuevoAtaqueJ.innerHTML = ataqueJug;
    nuevoAtaqueE.innerHTML = ataqueEnemi;
    resultado.innerHTML = batalla();


    //let parrafo = document.createElement('p');
    //parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJug + ' y el la mascota del enemigo ataco con ' + ataqueEnemi + " " + batalla();

    //Aqui estamos agregando el parrafo nuevo al elemento de HTML
    ataqueJugador.appendChild(nuevoAtaqueJ);
    ataqueEnemigo.appendChild(nuevoAtaqueE);
    //resultado.appendChild(notificacion);


}

function batalla(){
    var imprimir;

    if(ataqueJug == ataqueEnemi){
        imprimir = "EMPATE!🟡";
    }else if(ataqueJug == "Fuego" && ataqueEnemi == "Tierra"){
        imprimir = "GANASTE🟢";
        vidasEnemi--;
        vidasEnemigo.innerHTML = vidasEnemi;
    }else if(ataqueJug == "Agua" && ataqueEnemi == "Fuego"){
        imprimir = "GANASTE🟢";
        vidasEnemi--;
        vidasEnemigo.innerHTML = vidasEnemi;
    }else if(ataqueJug == "Tierra" && ataqueEnemi == "Agua"){
        imprimir = "GANASTE🟢";
        vidasEnemi--;
        vidasEnemigo.innerHTML = vidasEnemi;
    }else{
        imprimir = "PERDISTE🔴";
        vidasJug--;
        vidasJugador.innerHTML = vidasJug;
    };

    //Validamos vidas
    validarVidas();

    return imprimir;
}

function validarVidas(){
    if(vidasEnemi == 0){
        alert("Ganaste la batalla");
        btnDesabled();
        seleccionReset.style.display = 'block';
    }else if(vidasJug == 0){
        alert("Perdiste la batalla");
        btnDesabled();
        seleccionReset.style.display = 'block';
    }else{
        //No pasa nada jaja
    }
}

function btnDesabled(){
     //Desabilitanos los botones
     btnFuego.disabled = true;
     btnAgua.disabled = true;
     btnTierra.disabled = true;
}

function reset(){
    location.reload();
}

//Genera un numero alatorio
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};


//Funcion escucha cuando todo el contenido de la pagina carge
window.addEventListener('load', inicarJuego);