console.log("Hello world");
// Dada una matriz de números enteros nums y un número entero target, devuelva los índices de los dos números de modo que sumen target .
// Puede suponer que cada entrada tendría exactamente una solución y no puede usar el mismo elemento dos veces.
// Puede devolver la respuesta en cualquier orden.
// Ejemplo 1:
// Entrada: nums = [2,7,11,15], destino = 9
//  Salida: [0,1]
//  Explicación: Como nums[0] + nums[1] == 9, devolvemos [0, 1].
// Ejemplo 2:
// Entrada: nums = [3,2,4], objetivo = 6
//  Salida: [1,2]
// Ejemplo 3:
// Entrada: nums = [3,3], objetivo = 6
//  Salida: [0,1]
//Todo: Primero que todo lo que vamos a hacer de primero es definir la funcion y de nombre va a tener twosum , esta va a recibir el array y el numero que queremos que encuentre si hay una suma entre esos elementos del array que me de ese target o numero
function twoSum(numeros, target) {
    //lo que tengo pensado es ir tomando cada uno de los elementos del array para eso voy a hacer un bucle , y irlos sumando con los otros , y cuando la suma me de igual que el target retorno el indice de esos 2 numeros , para eso debo ir comparando la suma de esos numeros
    //la ventaja de colocarle el tipo al parametro es que ahora como sabe que es un array me da todos los metodos de array
    for (var i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        //ahora como obtenemos cada num , debemos de hacer otro bucle para obtener los otros
        for (var j = 0; j < numeros.length; j++) {
            // console.log(j)
            if (i == j) {
                continue;
            }
            if (numeros[i] + numeros[j] == target) {
                var indices = [i, j];
                return indices;
            }
            else {
                return "NO HAY NINGUNA SUMA ENTRE 2 NUMEROS DEL ARREGLO QUE ME DE ".concat(target);
            }
        }
    }
}
var nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
