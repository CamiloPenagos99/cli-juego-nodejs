import iniciarMatrizJuego from './juego/nuevoJuego.js';
import JuegoActual from './juego/juego.js';
import tirarDado from './dado/dado.js';
import moverFicha from './juego/recorrerJuego.js';
import promptSync from 'prompt-sync';
import { LANZAR, TERMINADO } from './util/constantes.js';
import { TERMINAR } from './util/constantes.js';

const prompt = promptSync();
iniciarMatrizJuego(JuegoActual.matriz);
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
while (accion !== TERMINAR || JuegoActual.estado==TERMINADO) {
    const entrada = prompt('Lanza el dado...(tecla enter)');
    if (entrada.toUpperCase() === 'EXIT' ) accion = TERMINAR;
    else {
       
        const dado = tirarDado();
        console.log(`🎲 ${dado}`);
        const posicion = moverFicha(JuegoActual, JuegoActual.matriz, dado);
        console.log('moviendo ficha...😎', 'a posicion', posicion);
        console.table(JuegoActual.matriz);
    }
}
