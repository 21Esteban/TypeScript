//*Tipos de datos primitivos
// string representa valores de cadena como"Hello, world"
// numberes para números como 42. JavaScript no tiene un valor de tiempo de ejecución especial para los números enteros, por lo que no hay equivalente a into float- todo es simplemente number

// booleanes para los dos valores true y false

let nombre = "juan" //let nombre: string
let edad = 18 //let edad: number
let estaActivo = true //let estaActivo: boolean


//*Arreglos

// Para especificar el tipo de una matriz como [1, 2, 3], puede usar la sintaxis number[]; esta sintaxis funciona para cualquier tipo (por ejemplo, string[] es una matriz de cadenas, etc.). También puede ver esto escrito como Array<number>, lo que significa lo mismo. Aprenderemos más sobre la sintaxis T<U> cuando cubramos los genéricos .

let meses : string[] = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

let diasSemana : number[] = [1,2,3,4,5,6,7]

let diasSemanaNombre : Array<string> = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]


//**  TypeScript también tiene un tipo especial, any, que puede usar siempre que no desee que un valor en particular cause errores de verificación de tipos

// Cuando un valor es de tipo any, puede acceder a cualquier propiedad del mismo (que a su vez será de tipo any), llamarlo como una función, asignarlo a (o desde) un valor de cualquier tipo, o prácticamente cualquier otra cosa que sea sintácticamente legal:

let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// El anytipo es útil cuando no desea escribir un tipo largo solo para convencer a TypeScript de que una línea de código en particular está bien.

/**  
 *!Cuando no especifica un tipo, y TypeScript no puede deducirlo del contexto, el compilador normalmente tendrá como valor predeterminado any. Sin embargo, por lo general desea evitar esto, porque anyno se verifica el tipo. Use el indicador del compilador noImplicitAnypara marcar cualquier implícito anycomo un error.
 */




/**  
 * ?  Escriba anotaciones en variables
 * ? Cuando declara una variable usando const, varo let, puede agregar opcionalmente una anotación de tipo para especificar explícitamente el tipo de la variable:
 */


let nombrePersona2:string = "Camilo" //TypeScript no usa declaraciones de estilo de "tipos a la izquierda", como int x = 0; las anotaciones de tipo que siempre irán después de lo que se escribe.
let edadPersona2:number = 18

// *?En la mayoría de los casos, sin embargo, esto no es necesario. Siempre que sea posible, TypeScript intenta inferir automáticamente los tipos en su código. Por ejemplo, el tipo de una variable se infiere en función del tipo de su inicializador:








