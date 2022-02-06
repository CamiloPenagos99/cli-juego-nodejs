const POSICIONLIMITE = 4;
const saltoNivel = 1;

const moverFicha = (matriz, pasos, posicionFila = 4, posicionColumna = -1) => {
    //const casillaInicio = matriz[posicionFila][posicionColumna];
    console.log(`Moviendo la ficha... ${pasos} lugares`);
    const movimiento = posicionColumna + pasos;

    if (movimiento > POSICIONLIMITE) {
        if (posicionColumna == -1) {
            const pasosEnX = POSICIONLIMITE;
            const pasosRestantes = pasos - pasosEnX - saltoNivel;
            matriz[posicionFila + saltoNivel][
                posicionColumna + pasosEnX - pasosRestantes
            ] = '😎';
        }
        const pasosEnX = POSICIONLIMITE - posicionColumna;
        const pasosRestantes = pasos - pasosEnX - saltoNivel;
        matriz[posicionFila + saltoNivel][
            posicionColumna + pasosEnX - pasosRestantes
        ] = '😎';
    } else if (movimiento <= POSICIONLIMITE) {
        matriz[posicionFila][posicionColumna + pasos] = '😎';
    }

    return matriz;
};

export default moverFicha;
