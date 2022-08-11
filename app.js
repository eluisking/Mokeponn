
let ataqueJug;
let ataqueEnemi;
let vidasJug = 3;
let vidasEnemi = 3;

//Funcion cuando carge la pagina
function inicarJuego(){
    //Ocultamos contenido
    let seleccionAtaque = document.getElementById('select-ataque');
    seleccionAtaque.style.display = 'none';
    let seleccionReset = document.getElementById('sec-reset');
    seleccionReset.style.display = 'none';

    let btnMascotaJugador = document.getElementById('btn-mascota');

    //Boton seleccionar mascota
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    //Botones de ataque
    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', ataqueFuego);
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', ataqueAgua);
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.addEventListener('click', ataqueTierra);

    //btn-reset
    let btnReset = document.getElementById('btn-reset');
    btnReset.addEventListener('click', reset);

}


//Logica seleccionar mascota
function seleccionarMascotaJugador(){
    //Descultamos contenido
    let seleccionAtaque = document.getElementById('select-ataque');

    let seleccionMascota = document.getElementById('select-mascota');

    let seleccionReset = document.getElementById('sec-reset');


    //Variables de los checkbox
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatihuella = document.getElementById('ratiguella');
    let mascotaJug = document.getElementById('mascota-jug');

    //Validamos cual opcion esta seleccionada
    if(inputHipodoge.checked){
        mascotaJug.innerHTML = "Hipodoge";
        seleccionAtaque.style.display = 'block';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Hipodoge!");
    }else if(inputCapipepo.checked){
        mascotaJug.innerHTML = "Capipepo";
        seleccionAtaque.style.display = 'block';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Capipepo!");
    }else if(inputRatihuella.checked){
        mascotaJug.innerHTML = "Ratiguella";
        seleccionAtaque.style.display = 'block';
        seleccionMascota.style.display = 'none';
        //alert("Has seleccionado Ratiguella!");
    }else{
        alert("Selecciona una mascota!");
        seleccionReset.style.display = 'none';
        seleccionAtaque.style.display = 'none';
        seleccionMascota.style.display = 'block';
    }

    //LLama la funcion de seleccion del enemigo 
    seleccionarMascotaEnemigo();

}

//Esta funcion genera la mascota aleaoria del enemigo
function seleccionarMascotaEnemigo(){
    let mascotaEnemi = document.getElementById('mascota-enemi');
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
    let seccionM = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJug + ' y el la mascota del enemigo ataco con ' + ataqueEnemi + " " + batalla();

    //Aqui estamos agregando el parrafo nuevo al elemento de HTML
    seccionM.appendChild(parrafo);


}

function batalla(){

    //Para mostrar vidas
    let vidasJugador = document.getElementById('vida-jug');
    let vidasEnemigo = document.getElementById('vida-enemi');

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
    let seleccionReset = document.getElementById('sec-reset');

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
     let btnFuego = document.getElementById('btn-fuego');
     btnFuego.disabled = true;
     let btnAgua = document.getElementById('btn-agua');
     btnAgua.disabled = true;
     let btnTierra = document.getElementById('btn-tierra');
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