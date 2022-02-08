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


    //trampa uno
    matriz[4][3]  = '🐍';
    matriz[3][3]  = '🐍';
    matriz[2][3]  = '🐍';
 
    //trampa dos
    matriz[3][2]  = '🐍';
    matriz[2][2]  = '🐍';
    matriz[1][1]  = '🐍';

    //trampa tres
    matriz[1][4]  = '🐍';
    matriz[0][3]  = '🐍';

    //trampa tres
    matriz[1][0]  = '🐍';
    matriz[0][1]  = '🐍';
    
};

export default iniciarTrampasAtajos;