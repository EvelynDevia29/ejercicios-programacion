/**
 * Ejercicio 1
Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:
Input: 5
Output:
Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...)
 */

let numeroEntrada = 5;
console.log(`${'Tabla del '}`+`${numeroEntrada}`);
for (i = 1; i <= 10; i++) {
    multiplicar = numeroEntrada * i;
    console.log(`${numeroEntrada}`+ `${' x '}`+`${i}`+ `${' ='}`+ `${multiplicar}`);
}