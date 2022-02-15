/*Ejercicio 3
Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

Input: ("Hola", "Hola cómo andas?")
Output: 1*/

//let cadena = 'me me hola, tengo hola años';
//let palabra = 'hola';

function buscarPalabra (palabra, cadena){
    
    const cadenaLimpia = cadena.toLowerCase().replace(',', '');
    //console.log('cadena limpia ',cadenaLimpia);

    const buscaPalabra = cadenaLimpia.includes(palabra);
    if (buscaPalabra) {
        const palabras = cadenaLimpia.split(' ');
        var map = {};
        console.log(palabras);
        palabras.forEach(iteradorPalabra => {
            map[iteradorPalabra] ? map[iteradorPalabra]++ : map[iteradorPalabra] = 1;

        }); 
        
        var resultado = map[palabra];
        console.log('La palabra '+ palabra +' se repite '+ resultado + ' veces');
        return resultado;
    }
    
  return 0;
}

var x = new buscarPalabra('hola','me me me hola, tengo hola años');