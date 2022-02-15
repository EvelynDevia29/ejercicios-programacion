/**Ejercicio 2
Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés),
por ejemplo Bob, Pop, etc... No tener en cuenta espacios ni simbolos.

Input: "otto"
Output: true */


var cadenaOrigin = Invertir("maca");
var cadenaInvertida;
function Invertir(cadenaOrigin) {

    cadenaInvertida = cadenaOrigin.split("").reverse().join("");
    
    if(cadenaInvertida!=cadenaOrigin){
        console.log('no es palindromo');
    }else{
        console.log('si es palindromo');
    }
    
    return cadenaInvertida;



}