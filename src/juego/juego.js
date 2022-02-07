import MATRIZJUEGO  from '../tablero/matriz.js';
import { JUGANDO } from '../util/constantes.js';

const JuegoActual = {
    matriz: MATRIZJUEGO,
    posicion: [4,-1],
    estado: JUGANDO,
};

export default JuegoActual;