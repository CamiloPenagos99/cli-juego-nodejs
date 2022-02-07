import iniciarMatrizJuego from './juego/nuevoJuego.js';
import MATRIZJUEGO from './tablero/matriz.js';
import tirarDado from './dado/dado.js';
import moverFicha from './juego/recorrerJuego.js';
import promptSync from 'prompt-sync';
import { LANZAR } from './util/constantes.js';
import { TERMINAR } from './util/constantes.js';

const prompt = promptSync();
iniciarMatrizJuego(MATRIZJUEGO);
console.log('Iniciando nuevo juego...');
console.log(
    '\n',
    'para lanzar dado presiona tecla: ENTER 🎲',
    '\n',
    'para terminar juego ingresa: EXIT 🛑'
);
console.log('');
var accion = LANZAR;
while (accion !== TERMINAR) {
    const entrada = prompt('Lanza el dado...(tecla enter)');
    if (entrada.toUpperCase() === 'EXIT') accion = TERMINAR;
    else {
        console.table(MATRIZJUEGO);
        const dado = tirarDado();
        console.log(`🎲 ${dado}`);
        const renderMatriz = moverFicha(MATRIZJUEGO, dado);
        console.log('moviendo ficha...😎');
        console.table(renderMatriz);
    }
}
