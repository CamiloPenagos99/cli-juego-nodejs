import iniciarMatrizJuego from './juego/nuevoJuego.js';
import JuegoActual from './juego/juego.js';
import tirarDado from './dado/dado.js';
import moverFicha from './juego/recorrerJuego.js';
import promptSync from 'prompt-sync';
import { LANZAR, TERMINADO } from './util/constantes.js';
import { TERMINAR } from './util/constantes.js';
import { ascenderDescenderEnTablero } from './juego/logicaTrampasJuego.js';
import { rellenarFormatoCasillasTabler } from './tablero/formatoTablero.js';

const prompt = promptSync();
iniciarMatrizJuego(JuegoActual.matriz);
const matrizCasillas = rellenarFormatoCasillasTabler(JuegoActual.casillas);
console.table(matrizCasillas);
console.log('Iniciando nuevo juego...');
console.log(
    '\n',
    'para lanzar dado presiona tecla: ENTER 🎲',
    '\n',
    'para terminar juego ingresa: EXIT 🛑'
);
console.log('');
console.table(JuegoActual.matriz);
var accion = LANZAR;
while (accion !== TERMINAR && JuegoActual.estado != TERMINADO) {
    const entrada = prompt('Lanza el dado...(tecla enter)');
    if (entrada.toUpperCase() === 'EXIT') accion = TERMINAR;
    else {
        const dado = tirarDado();
        console.log(`dado arroja:  🎲 ${dado}`);
        const posicion = moverFicha(JuegoActual, JuegoActual.matriz, dado);
        const casilla = JuegoActual.casillas[posicion[0]][posicion[1]];
        const mensaje =
      casilla == 25
          ? `Jugador supero...🤩 la casilla: ${casilla}`
          : `Jugador avanza...😎 a casilla: ${casilla}`;
        console.log(mensaje);
        ascenderDescenderEnTablero(
            JuegoActual,
            JuegoActual.matriz,
            posicion[1],
            posicion[0]
        );
        console.table(JuegoActual.matriz);
    }
}
