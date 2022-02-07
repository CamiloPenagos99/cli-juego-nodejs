import { escaleras } from './configuracion/reglasJuego.js';

export const ascenderDescenderEnTablero = (juego,matriz, posicionX, posicionY)=>{
    console.log('validando atajo para posicion:', posicionY,posicionX);
    const escaleraAtajo = escaleras.find((escalera)=>escalera.inicio.x==posicionX && escalera.inicio.y==posicionY);
    console.log('escalera atajo: ', escaleraAtajo);
    if(escaleraAtajo){
        juego.matriz[posicionY][posicionX]='⬜';
        
        const nuevaPosicionX=escaleraAtajo.fin.x;
        const nuevaPosicionY=escaleraAtajo.fin.y;
        matriz[nuevaPosicionY][nuevaPosicionX]='😎';
        juego.posicion[0]=nuevaPosicionY;
        juego.posicion[1]=nuevaPosicionX;
        console.log('El jugador asciende a casilla: ', juego.casillas[nuevaPosicionY][nuevaPosicionX]);
    
    }
   
    return escaleraAtajo;
};