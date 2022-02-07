import iniciarTrampasAtajos from '../tablero/trampasTablero.js';

const iniciarMatrizJuego = (juego) => {
    for (let i = 0; i < juego.length; i++) {
        const fila = juego[i];
        for (let j = 0; j < fila.length; j++) {
            const casilla = `${i}-${j}⬜`;
            juego[i][j] = casilla;
        }
    }

    //iniciar trampas y atajos
    iniciarTrampasAtajos(juego);
};

export default iniciarMatrizJuego;
