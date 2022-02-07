import { POSICIONLIMITE } from '../util/constantes.js';

export const rellenarFormatoCasillasTabler = (matriz)=>{

    let valorTablero=1;
    
    for (let i = POSICIONLIMITE; i >= 0; i--) {
        //console.log('contador:', valorTablero);
        //valorTablero++;
        //const fila = matriz[i];
        //console.log('fila', fila);
        if(i % 2 == 0){
            for (let j = 0; j <= POSICIONLIMITE; j++) {
               
                // const columna = fila[j];
                matriz[i][j] = valorTablero;
                valorTablero++;
            }
        }
        else if(i % 2 != 0){
            for (let j = POSICIONLIMITE; j >= 0; j--) {
                
                //const columna = fila[j];
                matriz[i][j] = valorTablero;
                valorTablero++;
            }
        }
       
    }
    return matriz;
};