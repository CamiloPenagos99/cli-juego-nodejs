import { POSICIONLIMITE, TERMINADO } from '../util/constantes.js';
import { SALTONIVEL } from '../util/constantes.js';
import JuegoActual from './juego.js';

const moverFicha = (juego, matriz, pasos) => {
    const posicionFila = juego.posicion[0];
    const posicionColumna = juego.posicion[1];
    let nuevaPosicionY = 0;
    let nuevaPosicionX = 0;
    console.log(`Jugador tiene ${pasos} pasos`);
    if (posicionFila % 2 == 0) {
        const movimiento = posicionColumna + pasos;
        if (movimiento > POSICIONLIMITE) {
            if (posicionColumna == -1) {
                const pasosEnX = POSICIONLIMITE + 1;
                const pasosRestantes = pasos - pasosEnX;
                nuevaPosicionY = posicionFila - SALTONIVEL;
                nuevaPosicionX = POSICIONLIMITE - (pasosRestantes - SALTONIVEL);
                matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
            } else {
                if (posicionFila == 0) {
                    //console.log('Ultima fila...');
                    if (posicionColumna + pasos == POSICIONLIMITE) {
                        console.log('... 🏆 Ganaste 🥇 ...');
                        JuegoActual.estado = TERMINADO;
                        nuevaPosicionY = posicionFila;
                        nuevaPosicionX = POSICIONLIMITE;
                        //console.log('cambiando icono ganador... 1');
                        matriz[0][POSICIONLIMITE] = '🤩';
                        //console.log('cambiando icono ganador...', matriz[0][4]);
                        // return [nuevaPosicionX,nuevaPosicionY];
                    } else {
                        console.log('Jugador se mantiene en posicion');
                        nuevaPosicionY = posicionFila;
                        nuevaPosicionX = posicionColumna;
                        matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
                    }
                } else {
                    const pasosEnX = POSICIONLIMITE - posicionColumna;
                    const pasosRestantes = pasos - pasosEnX;
                    nuevaPosicionY = posicionFila - SALTONIVEL;
                    nuevaPosicionX =
            posicionColumna + pasosEnX - (pasosRestantes - SALTONIVEL);
                    matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
                }
            }
        } else if (movimiento <= POSICIONLIMITE) {
            if (posicionFila == 0) {
                //console.log('Ultima fila...');
                if (posicionColumna + pasos == POSICIONLIMITE) {
                    console.log('... 🏆 Ganaste 🥇 ...');
                    JuegoActual.estado = TERMINADO;
                    nuevaPosicionY = posicionFila;
                    nuevaPosicionX = POSICIONLIMITE;
                    //console.log('cambiando icono ganador...2',matriz[0][4]);
                    matriz[0][POSICIONLIMITE] = '🤩';
                    //console.log('cambiando icono ganador...', matriz[0][4]);
                    // return [nuevaPosicionX,nuevaPosicionY];
                } else if (posicionColumna + pasos < POSICIONLIMITE) {
                    nuevaPosicionY = posicionFila;
                    nuevaPosicionX = posicionColumna + pasos;
                    matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
                }
            } else {
                nuevaPosicionY = posicionFila;
                nuevaPosicionX = posicionColumna + pasos;
                matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
            }
        }
        juego.posicion[0] = nuevaPosicionY;
        juego.posicion[1] = nuevaPosicionX;
    }
    //movimiento izquierda a derecha
    else {
        const movimiento = posicionColumna - pasos;
        if (movimiento < 0) {
            const pasosEnX = posicionColumna - 0;
            const pasosRestantes = pasos - pasosEnX;
            nuevaPosicionY = posicionFila - SALTONIVEL;
            nuevaPosicionX =
        posicionColumna - pasosEnX + (pasosRestantes - SALTONIVEL);
            if (nuevaPosicionX > POSICIONLIMITE) {
                const pasosSobrantes = nuevaPosicionX - POSICIONLIMITE;
                nuevaPosicionY = posicionFila - (SALTONIVEL + pasosSobrantes);
                nuevaPosicionX =
          posicionColumna -
          pasosEnX +
          (pasosRestantes - SALTONIVEL - pasosSobrantes);
            } else matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
        } else {
            nuevaPosicionY = posicionFila;
            nuevaPosicionX = posicionColumna - pasos;
            matriz[nuevaPosicionY][nuevaPosicionX] = '😎';
        }
        juego.posicion[0] = nuevaPosicionY;
        juego.posicion[1] = nuevaPosicionX;
    }
    if ((nuevaPosicionX == POSICIONLIMITE) && (nuevaPosicionY == 0)) {
        console.log('... 🏆 Ganaste 🥇 ...');
        JuegoActual.estado = TERMINADO;
        nuevaPosicionY = posicionFila;
        nuevaPosicionX = POSICIONLIMITE;
        //console.log('cambiando icono ganador...3',matriz[0][4]);
        matriz[0][POSICIONLIMITE] = '🤩';
    //console.log('cambiando icono ganador...', matriz[0][4]);
    }
    return [nuevaPosicionY, nuevaPosicionX];
};

export default moverFicha;
