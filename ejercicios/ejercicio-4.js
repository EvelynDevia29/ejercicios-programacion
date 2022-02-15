/**Ejercicio 4
Dado un String, darle la vuelta, invertir el orden de sus caracteres. 
No se pueden usar metodos del lenguaje, solo estructuras de control.

Input: "hola"
Output: aloh */

// word.split("").reverse().join(''); -- Solucion en una sola linea



function invertirPalabra(palabra) {
    let invertir = "";
    // recorremos el texto que nos llega letra por letra
    for (let letra of palabra) {
        // guardamos cada letra en orden invertido
        invertir = letra + invertir;
    }
    console.log(invertir);
    return invertir;

}
x = new invertirPalabra('Murcielago');

