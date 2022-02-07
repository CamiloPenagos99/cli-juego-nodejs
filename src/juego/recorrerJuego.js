import { POSICIONLIMITE } from '../util/constantes.js';
import { SALTONIVEL } from '../util/constantes.js';

const moverFicha = (juego, matriz, pasos) => {
    const posicionFila = juego.posicion[0];
    const posicionColumna = juego.posicion[1];
    console.log(`Moviendo la ficha... ${pasos} lugares`);
    const movimiento = posicionColumna + pasos;
    let nuevaPosicionY = 0;
    let nuevaPosicionX = 0;
    if (movimiento > POSICIONLIMITE) {
        if (posicionColumna == -1) {
            const pasosEnX = POSICIONLIMITE + 1;
            const pasosRestantes = pasos - pasosEnX;
            nuevaPosicionY = posicionFila - SALTONIVEL;
            nuevaPosicionX = POSICIONLIMITE - (pasosRestantes - SALTONIVEL);
            matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
        } else {
            const pasosEnX = POSICIONLIMITE - posicionColumna;
            const pasosRestantes = pasos - pasosEnX;
            nuevaPosicionY = posicionFila - SALTONIVEL;
            nuevaPosicionX = posicionColumna + pasosEnX - (pasosRestantes - SALTONIVEL);
            matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
        }
    } else if (movimiento <= POSICIONLIMITE) {
        nuevaPosicionY = posicionFila;
        nuevaPosicionX = posicionColumna + pasos;
        matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
    }
    juego.posicion[0]=nuevaPosicionY;
    juego.posicion[1]=nuevaPosicionX;
    return [nuevaPosicionX,nuevaPosicionY];
};

export default moverFicha;
