const iniciarTrampasAtajos = (matriz) =>{

    //escalera uno
    matriz[4][2]  = '📏';
    matriz[3][1]  = '📏';
    matriz[2][0]  = '📏';

    //escalera dos
    matriz[3][0]  = '📏';
    matriz[2][1]  = '📏';

    //escalera tres
    matriz[3][1]  = '📏';
    matriz[2][2]  = '📏';
    matriz[1][2]  = '📏';

    //escalera cuatro
    matriz[3][4]  = '📏';
    matriz[2][3]  = '📏';
    matriz[1][3]  = '📏';


    //atajo uno
    /*
    matriz[4][3]  = '🐍';
    matriz[3][3]  = '🐍';
    matriz[2][3]  = '🐍';
 
    //atajo dos
    matriz[3][2]  = '🐍';
    matriz[2][2]  = '🐍';
    matriz[1][2]  = '🐍';

    //atajo tres
    matriz[1][4]  = '🐍';
    matriz[0][3]  = '🐍';
    */
};

export default iniciarTrampasAtajos;