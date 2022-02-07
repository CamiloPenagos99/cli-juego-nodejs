const POSICIONLIMITE = 4;
const SALTONIVEL = 1;

const moverFicha = (matriz, pasos, posicionFila = 4, posicionColumna = -1) => {
    //const casillaInicio = matriz[posicionFila][posicionColumna];
    console.log(`Moviendo la ficha... ${pasos} lugares`);
    const movimiento = posicionColumna + pasos;

    if (movimiento > POSICIONLIMITE) {
        if (posicionColumna == -1) {
            const pasosEnX = POSICIONLIMITE + 1;
            const pasosRestantes = pasos - pasosEnX;
            matriz[posicionFila - SALTONIVEL][
                POSICIONLIMITE - (pasosRestantes - SALTONIVEL)
            ] = '😎';
        }
        else{
            const pasosEnX = POSICIONLIMITE;
            const pasosRestantes = pasos - pasosEnX;
            matriz[posicionFila - SALTONIVEL][
                posicionColumna + pasosEnX - (pasosRestantes - SALTONIVEL)
            
            ] = '😎'; }
    } else if (movimiento <= POSICIONLIMITE) {
        matriz[posicionFila][posicionColumna + pasos] = '😎';
    }

    return matriz;
};

export default moverFicha;
