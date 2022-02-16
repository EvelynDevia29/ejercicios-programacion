/**Ejercicio 5
Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como
 el numero por parametros.

Input: (20, 100) -- El 20% de 100
Output: 20 */

function calcularPorcentaje(porcentaje,numero){

    let porciento = (porcentaje * numero)/100;
    console.log('El '+ porcentaje + '%'+ ' de ' + numero + ' es:' + porciento);


}

x = new calcularPorcentaje(5,20000);