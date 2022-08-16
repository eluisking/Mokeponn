const seleccionAtaque = document.getElementById('select-ataque');
const seleccionReset = document.getElementById('sec-reset');
const btnMascotaJugador = document.getElementById('btn-mascota');
const btnReset = document.getElementById('btn-reset');
const ataqueEnemigo = document.getElementById('ataque-enemigo');
const seleccionMascota = document.getElementById('select-mascota');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('tarjetas-ataques');

const mascotaJug = document.getElementById('mascota-jug');
const mascotaEnemi = document.getElementById('mascota-enemi');

const resultado = document.getElementById('resultado');
const ataqueJugador = document.getElementById('ataque-jugador');

//Para mostrar vidas
const vidasJugador = document.getElementById('vida-jug');
const vidasEnemigo = document.getElementById('vida-enemi');

let btnFuego;
let btnAgua;
let btnTierra;
let mokepones = [];
// let botoness = [];
let ataqueJug;
let ataqueEnemi;
let opciondemokepon;
let opcionAtaques;
let inputHipodoge;
let inputCapipepo;
let inputRatihuella;
let mascotaEleccion;
let vidasJug = 3;
let vidasEnemi = 3;

//
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataque = [];
    }
}

//Intanciamos la clase
let hipodoge = new Mokepon('Hipodoge', 'assets/mokepons_mokepon_hipodoge_attack.png', 3);
let capipepo = new Mokepon('Capipepo', 'assets/mokepons_mokepon_capipepo_attack.png', 3);
let ratihuella = new Mokepon('Ratihuella', 'assets/mokepons_mokepon_ratigueya_attack.png', 3);

//Ataques para hipodoge
hipodoge.ataque.push(
    {nombre: 'Agua', id: 'btn-agua'},
    {nombre: 'Fuego', id: 'btn-fuego'},
    {nombre: 'Tierra', id: 'btn-tierra'},
);

//Ataque de capipepo
capipepo.ataque.push(
    {nombre: 'Tierra', id: 'btn-tierra'},
    {nombre: 'Agua', id: 'btn-agua'},
    {nombre: 'Fuego', id: 'btn-fuego'},
);

//Ataque de ratihuella
ratihuella.ataque.push(
    {nombre: 'Fuego', id: 'btn-fuego'},
    {nombre: 'Agua', id: 'btn-agua'},
    {nombre: 'Tierra', id: 'btn-tierra'},
);

//console.log(hipodoge.ataque);

//Isertamos nuestras instancias a el arreglo
mokepones.push(hipodoge, capipepo, ratihuella);

//console.log(mokepones);

//Funcion cuando carge la pagina
function inicarJuego(){
    //Ocultamos contenido
    seleccionAtaque.style.display = 'none';
    seleccionReset.style.display = 'none';

    //Gneramos las tarjetas de las mascotas
    mokepones.forEach((mokepon) => {
        opciondemokepon = `
        <input type="radio" name="mascotas" id=${mokepon.nombre} style="display: none;">
            <label class="btn-mascota" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;

        contenedorTarjetas.innerHTML += opciondemokepon;

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatihuella = document.getElementById('Ratihuella');

    });



    //Boton seleccionar mascota
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    //btn-reset;
    btnReset.addEventListener('click', reset);

}


//Logica seleccionar mascota
function seleccionarMascotaJugador(){
    //Validamos cual opcion esta seleccionada
    if(inputHipodoge.checked){
        mascotaJug.innerHTML = inputHipodoge.id;
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        mascotaEleccion = inputHipodoge.id;
        //alert("Has seleccionado Hipodoge!");
    }else if(inputCapipepo.checked){
        mascotaJug.innerHTML = inputCapipepo.id;
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        mascotaEleccion = inputCapipepo.id;
        //alert("Has seleccionado Capipepo!");
    }else if(inputRatihuella.checked){
        mascotaJug.innerHTML = inputRatihuella.id;
        seleccionAtaque.style.display = 'flex';
        seleccionMascota.style.display = 'none';
        mascotaEleccion = inputRatihuella.id;
        //alert("Has seleccionado Ratiguella!");
    };
    
    extraerAtaques(mascotaEleccion);
    //LLama la funcion de seleccion del enemigo 
    seleccionarMascotaEnemigo();

}

//Generando ataque para HTML
function extraerAtaques(extraerAtaques){
    let ataques;
    for(let i=0;i<mokepones.length;i++){
        if(mascotaEleccion == mokepones[i].nombre){
            ataques = mokepones[i].ataque;
        }
    }
    
    //console.log(ataques);

    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    
    ataques.forEach((ataque) => {
        opcionAtaques = `<button class="btns BAtaque" id="btn-${ataque.nombre}">${ataque.nombre}</button>`;
        //console.log(ataque.nombre);

        contenedorAtaques.innerHTML += opcionAtaques;
    });

    btnFuego = document.getElementById('btn-Fuego');
    btnAgua = document.getElementById('btn-Agua');
    btnTierra = document.getElementById('btn-Tierra');
    botoness = document.querySelectorAll('.BAtaque');

    //console.log(botoness);

    //Botones de ataque
    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);

}


// function secuenciaAtaques(){
//     botoness.forEach((boton) => {
//         boton.addEventListener('click',(e) => {
//             if(e.target.textContent === '🔥'){

//             }
//         })
//     })
// }

//Esta funcion genera la mascota aleaoria del enemigo
function seleccionarMascotaEnemigo(){
    //Llama la funcion aleatorio y la guarda en una variable
    let nAleaortio = aleatorio(0, mokepones.length - 1);

    mascotaEnemi.innerHTML = mokepones[nAleaortio].nombre;
    // secuenciaAtaques();

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