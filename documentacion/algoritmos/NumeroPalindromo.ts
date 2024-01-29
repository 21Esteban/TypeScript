// Dado un número entero x, devuelve true si x es un
// palíndromo
// , y false de otra manera .

// Ejemplo 1:

// Entrada: x = 121
//  Salida: verdadero
//  Explicación: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda.
// Ejemplo 2:

// Entrada: x = -121
//  Salida: falso
//  Explicación: De izquierda a derecha, se lee -121. De derecha a izquierda, se convierte en 121-. Por lo tanto no es un palíndromo.
// Ejemplo 3:

// Entrada: x = 10
//  Salida: falso
//  Explicación: Lee 01 de derecha a izquierda. Por lo tanto no es un palíndromo.

function isPalindrome(x: number): boolean {
  //voy a convertirlo a string y listo , compararo al derecho y al reves

  let numeroAstring: string = x.toString();
  let numeroAlReves: string = ""
  for (let i = numeroAstring.length-1; i >= 0; i--) {
    numeroAlReves = numeroAlReves + numeroAstring[i] 
  }
  if (numeroAstring == numeroAlReves) {
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome(121))