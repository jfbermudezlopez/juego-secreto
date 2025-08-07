/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 3;
function asignarTextoElemento(elemento, texto){
let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
}


/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

console.log(numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);

    if (intentos >= numeroMaximoIntentos){
        asignarTextoElemento('p','Ya llegaste al limite de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } else{
    
    if (numeroSecreto > numeroDeUsuario){
        asignarTextoElemento('p', 'El número secreto es mayor.')
    } else{
        asignarTextoElemento('p', 'El número secrero es menor.')
    }
    intentos++;
    limpiarCaja();
    }
    return;
    }
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeros);

    if(listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

        if (listaNumeros.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
};

function reinicarJuego(){
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // desahibilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();