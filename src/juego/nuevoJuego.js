const iniciarMatrizJuego = (juego) => {
    for (let i = 0; i < juego.length; i++) {
        const fila = juego[i];
        for (let j = 0; j < fila.length; j++) {
            const casilla = `${i}-${j}⬜`;
            juego[i][j] = casilla;
        }
    }
};

export default iniciarMatrizJuego;
