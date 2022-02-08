import { escaleras } from './configuracion/reglasJuegoAtajos.js';
import { serpientes } from './configuracion/reglasJuegoTrampas.js';

export const ascenderDescenderEnTablero = (
    juego,
    matriz,
    posicionX,
    posicionY
) => {
    //console.log('validando atajo para posicion:', posicionY, posicionX);
    const escaleraAtajo = escaleras.find(
        (escalera) =>
            escalera.inicio.x == posicionX && escalera.inicio.y == posicionY
    );
    const serpienteTrampa = serpientes.find(
        (serpiente) =>
            serpiente.inicio.x == posicionX && serpiente.inicio.y == posicionY
    );
    //console.log('escalera atajo: ', escaleraAtajo);
    if (escaleraAtajo) {
        juego.matriz[posicionY][posicionX] = '⬜';

        const nuevaPosicionX = escaleraAtajo.fin.x;
        const nuevaPosicionY = escaleraAtajo.fin.y;
        matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
        juego.posicion[0] = nuevaPosicionY;
        juego.posicion[1] = nuevaPosicionX;
        console.log(
            'El jugador asciende a casilla: ',
            juego.casillas[nuevaPosicionY][nuevaPosicionX]
        );
    } else {
        if (serpienteTrampa) {
            juego.matriz[posicionY][posicionX] = '⬜';
            const nuevaPosicionX = serpienteTrampa.fin.x;
            const nuevaPosicionY = serpienteTrampa.fin.y;
            matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
            juego.posicion[0] = nuevaPosicionY;
            juego.posicion[1] = nuevaPosicionX;
            console.log(
                'El jugador desciende a casilla: ',
                juego.casillas[nuevaPosicionY][nuevaPosicionX]
            );
        }
    }

    return escaleraAtajo;
};
