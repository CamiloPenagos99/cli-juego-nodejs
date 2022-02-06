import iniciarMatrizJuego from './juego/nuevoJuego.js';
import MATRIZJUEGO from './tablero/matriz.js';
import tirarDado from './dado/dado.js';
import moverFicha from './juego/recorrerJuego.js';

iniciarMatrizJuego(MATRIZJUEGO);
console.table(MATRIZJUEGO);
const dado = tirarDado();
console.log(`🎲 ${dado}`);
const renderMatriz = moverFicha(MATRIZJUEGO, dado);
console.log('moviendo ficha...😎');
console.table(renderMatriz);
