// *TODO : Las funciones son el medio principal para pasar datos en JavaScript. TypeScript le permite especificar los tipos de los valores de entrada y salida de las funciones.

// Anotaciones de tipo de parámetro
// Cuando declara una función, puede agregar anotaciones de tipo después de cada parámetro para declarar qué tipos de parámetros acepta la función. Las anotaciones de tipo de parámetro van después del nombre del parámetro:

function saludar(nombre: string) {
  return `Buenas tardes ${nombre.toLowerCase()}`; //la ventaja que nos da colocar la anotacion de tipo es que typeScript nos autocompleta con los metodos asociados a el tipo de dato presente
}

//Cuando un parámetro tiene una anotación de tipo, se comprobarán los argumentos de esa función lo cual es super util ya que nos dice que tenemos un error al pasarle el dato a la funcion

// saludar(45) //nos lanza error pa

// ? Tambien podemos darle anotaciones de tipo a el retorno de una funcion

type Joke = {
  question: string;
  answer: string;
};

function generateRandomJoke(): Joke {
  const jokes: Joke[] = [
    {
      question: "¿Qué le dice un semáforo a otro?",
      answer: "No me mires, me estoy cambiando.",
    },
    {
      question: "¿Cómo llama Batman a su mamá?",
      answer: "¡Ma-mááááá!",
    },
    {
      question: "¿Qué le dice un jardinero a otro?",
      answer: "Nos vemos cuando podamos.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const randomJoke: Joke = generateRandomJoke();
console.log(randomJoke.question); // Salida: ¿Qué le dice un semáforo a otro?
console.log(randomJoke.answer); // Salida: No me mires, me estoy cambiando.

//   ** Al igual que las anotaciones de tipo de variable, normalmente no necesita una anotación de tipo de retorno porque TypeScript inferirá el tipo de retorno de la función en función de sus returndeclaraciones. La anotación de tipo en el ejemplo anterior no cambia nada. Algunas bases de código especificarán explícitamente un tipo de devolución con fines de documentación, para evitar cambios accidentales o simplemente por preferencia personal.

// !Funciones anónimas

// Las funciones anónimas son un poco diferentes de las declaraciones de funciones. Cuando aparece una función en un lugar donde TypeScript puede determinar cómo se va a llamar, los parámetros de esa función reciben automáticamente tipos.

// es decir , typeScripp es capaz de inferir el tipo de dato que le vamos a pasar a la funcion , ejemplo

const deportes = ["futbol", "baloncesto", "tenis", "beisbol"];

deportes.forEach(function (deporte) {
  console.log(deporte.toUpperCase()); //como typeScript es capaz de inferir que tipo de dato vamos a pasarle a la funcion anonima entonces nos autocompleta los metodos de ese tipo de dato
});

//**Lo mismo para una funcion flecha */

deportes.forEach((deporte) => {
  console.log(deporte.toLowerCase);
});

// Aunque el parámetro deporte no tenía una anotación de tipo, TypeScript usó los tipos de la función forEach, junto con el tipo inferido de la matriz, para determinar el tipo que deporte tendrá.

//? Tipos de objetos

//El tipo de dato mas comun ademas de los primitivos son los objetos que estan conformados por propiedades , van a haber casos en los que necesitemos pasar objetos como argumentos a una funcion , entonces para poder darle un tipo de dato a esas propiedades del objeto lo podriamos hacer de esta forma

function describirPersona(persona: {
  nombre: string;
  años: number;
  gusto: string;
}) {
  console.log(
    `La persona se llama ${persona.nombre} tiene ${persona.años} y le gusta ${persona.gusto}`
  );
}

describirPersona({ nombre: "Diego", años: 18, gusto: "la poronga" });

//Recordemos que si no especificamos el tipo de dato , typeScript lo tomara como Any

// **Propiedades opcionales
// Los tipos de objetos también pueden especificar que algunas o todas sus propiedades sean opcionales . Para hacer esto, agregue un ? después del nombre de la propiedad ejemplo :

//ahora lo vamos a hacer con una arroq function aunque con la otra seria igual

const describirPersona1 = (persona: {
  name: string;
  lastname: string;
  edad?: number;
}) => {
  console.log(
    `La persona ${persona.name} tiene de apellido ${persona.lastname} y tiene ${persona.edad}`
  );
};

describirPersona1({ name: "Lucas", lastname: "Perex" }); //La persona Lucas tiene de apellido Perex y tiene undefined   // esto es lo que nos muestra en consola , ya tednriamos que hacer una validacion para manejar es undefined

//! Tipos de union

// El sistema de tipos de TypeScript le permite crear nuevos tipos a partir de los existentes utilizando una gran variedad de operadores. Ahora que sabemos cómo escribir algunos tipos, es hora de comenzar a combinarlos de formas interesantes.

// Definición de un tipo de unión
// La primera forma de combinar tipos que puede ver es un tipo de unión . Un tipo de unión es un tipo formado por dos o más tipos, que representan valores que pueden ser cualquiera de esos tipos. Nos referimos a cada uno de estos tipos como miembros del sindicato .

//*  Escribamos una función que pueda operar en cadenas o números:

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//Todo printId({ myID: 22342 });  //lanza error por que la funcion solo recibe tipos de datos como number y string capo

// !Type Aliases
// Hemos estado usando tipos de objetos y tipos de unión escribiéndolos directamente en anotaciones de tipo. Esto es conveniente, pero es común querer usar el mismo tipo más de una vez y referirse a él por un solo nombre.

// Un alias de tipo es exactamente eso: un nombre para cualquier tipo . La sintaxis para un alias de tipo es:

//En TypeScript podemos usar algo llamado type Aliases que es basicamente una herramienta que se nos da para poder definir tipos , es decir , una estructura que vamos a nosotros mismo definiremos y vamos luego vamos a usar para asignar esa estructura a algo , ejemplo:

type Moto = {
  tipo: string;
  color: string;
  cilindraje: number;
};

// entonces ahora en ves de dar una anotacion de tipo a cada parametro de la funcion , simplemente colocamos que va recibir algo de tipo persona

function DescribirMoto(motocicleta: Moto) {
  console.log(
    `La moto es de color ${motocicleta.color} y es de ${motocicleta.cilindraje} centimetros cubicos y es ${motocicleta.tipo}`
  );
}

DescribirMoto({ tipo: "Sport", color: "blanca", cilindraje: 1000 });

//? Interfaces

// Una declaración de interfaz es otra forma de nombrar un tipo de objeto:

interface Carro {
  tipo: string;
  motor: string;
  color: string;
}


function DescribirCarro(carro:Carro){
    console.log(`Èl carro es de tipo ${carro.tipo} y tiene un motor ${carro.motor} ademas es de color ${carro.color}`)
}

DescribirCarro({tipo:"Deportivo",motor:"6.2L V8",color:"Negro"})

// ** Al igual que cuando usamos un alias de tipo anterior, el ejemplo funciona como si hubiéramos usado un tipo de objeto anónimo. TypeScript solo se preocupa por la estructura del valor al que pasamos printCoord, solo se preocupa de que tenga las propiedades esperadas. Preocuparse solo por la estructura y las capacidades de los tipos es la razón por la que llamamos a TypeScript un sistema de tipos estructuralmente tipado .




//Todo : Diferencias entre alias de tipo e interfaces

// Los alias de tipo y las interfaces son muy similares y, en muchos casos, puede elegir entre ellos libremente. Casi todas las funciones de una interface están disponibles en type, la distinción clave es que un tipo no se puede volver a abrir para agregar nuevas propiedades frente a una interfaz que siempre es extensible.

//*ejemplo 

//Todo : Ampliación de una interfaz

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

//Asi podemos hacer que una interfaz tome propiedades de otra interfaz y las haga suya XD  

// Cuando defines una interfaz y quieres que otra interfaz extienda sus propiedades, utilizas la palabra clave extends. Al hacerlo, la interfaz extendida hereda todas las propiedades y métodos de la interfaz base.


//*Ahora si queremos añadir nuevas propiedades a la interfaz seria asi 

interface bicicleta {
    color: string;
  }
  
  interface bicicleta {
    llantas: boolean;
  }

  //como podemos comprobar que enrealidad si se añadio la propiedad llantas ? . probemos con una funcion

function describirBici(bici:bicicleta){
    console.log(bici.color,bici.llantas)  //podemos acceder a las 2 propiedades , como si hubieramos definido la interfaz bicicleta con esas propiedades desde un principio 
}

describirBici({color:"rojo",llantas:true}) //Esto demuestra cómo se pueden añadir propiedades a una interfaz existente mediante declaraciones separadas y cómo se pueden utilizar todas las propiedades definidas en la interfaz combinada.

//Todo : Listo , ahora vamos a ver hacer que un Type tome propiedades de otro type a traves de intersecciones 

type computador = {
    placa:string
    procesador:string
}

type computadorGamer = computador & {
    grafica:boolean
}

//Entonces aqui basicamente lo que estamos haciendo es que computadorCamilo tome las propiedades de computador y ademas tenga la propiedad grafica , a esto se le conoce como intersecciones

//*Ahora vamos a hacer un objeto de tipo computadorGamer para que vean que este tipo obtuvo las propiedades de computador

const CompuPedro:computadorGamer = {
    placa:"wgV141",
    procesador:"intel core i5",
    grafica:true
} 

console.log(CompuPedro)

//*A los types no se le pueden añadir o cambiar propiedades una vez los hayamos definidos anteriormente , esta es la principal diferencia de los types con las interfaces , si necesitamos agregar algo a un type podriamos hacer que esta extienda de otro type , pero explicitamente si intentamos agregar una propiedad a un type ya definido este nos lanzara error

// type casa={
//     color:string
// }

// type casa={
//     tamaño:string      
// }

//error : Duplicate identifier 'casa'


// ?    Las interfaces solo se pueden usar para declarar las formas de los objetos, no para cambiar el nombre de las primitivas .



//!TIPOS LITERALES

// Los tipos literales en TypeScript permiten especificar valores exactos para una variable o propiedad. Por ejemplo, se pueden definir tipos literales como true, "hola", 42, etc. Estos tipos restringen los posibles valores que una variable puede tener, lo que ayuda a garantizar un comportamiento más preciso y seguro en el código.

let saludo:"hola" = "hola"  //let saludo: "hola"

//saludo="helo" //Type "helo" is not assinable to type "hola"

// saludo = "helo" //  nos salta error , ya que le dijimos que era de tipo "hola", es como que le decimos a typeScript que saludo tiene que ser de ese tipo por lo tanto no podemos modificar su valor asi sea let , ya que cuando intentemos actualizar saludo, tiene que cumplir con el tipo , y el tipo es un tipo literal, es como si le colocaramos const en ves de let


//TODO : Pero la verdad no nos sirve de mucho tener variables que solo tengan un solo valor , podemos usar estos literales para hacer que una variable solo pueda tomar unos valores definidos

let estadoCivil:"soltero" | "cadado" | "separado"  //definimos los valores que puede tomar la variable estadoCivil y cuando queramos asiganarle un valor , tiene que ser algunos de esos tipos literales que definimos que puede tomar esa variable 

estadoCivil = "soltero"

//si intentamos colocar otro valor que no este en los tipos literales que definimos , este nos lanzara error    





// null
// y
// undefined
// JavaScript tiene dos valores primitivos que se utilizan para señalar un valor ausente o no inicializado: nully undefined.

// TypeScript tiene dos tipos correspondientes con los mismos nombres. El comportamiento de estos tipos depende de si tiene la strictNullChecksopción activada.

// strictNullChecks
// apagado
// Con off , los valores a los que se puede o aún se puede acceder normalmente, y los valores y se pueden asignar a una propiedad de cualquier tipo. Esto es similar a cómo se comportan los lenguajes sin comprobaciones nulas (por ejemplo, C#, Java). La falta de verificación de estos valores tiende a ser una fuente importante de errores; siempre recomendamos que las personas activen si es práctico hacerlo en su base de código.strictNullChecks nullundefinednullundefinedstrictNullChecks

// strictNullChecks
// en
// Con on , cuando un valor es o , deberá probar esos valores antes de usar métodos o propiedades en ese valor. Al igual que verificar antes de usar una propiedad opcional, podemos usar el estrechamiento para verificar valores que podrían ser :strictNullChecks nullundefinedundefinednull



//**Funciones genericas  */  

//Estos tipos de funciones nos sirven para decirle a la funcion que vamos a recibir un tipo de dato que no sabemos cual es , pero que lo infiera y ese mismo de dato es el que tiene que retornar

function primerElemento<Type>(array:Type[]):Type{
  console.log(typeof array[1])
  return array[1]
}


const lista = ["ege",2,3,4]

console.log(primerElemento(lista))

//*? Sí, tu explicación es correcta. La función primerElemento es una función genérica que utiliza el tipo de datos <Type> como un parámetro para indicar que puede recibir un array de cualquier tipo. Luego, dentro de la función, utilizas ese tipo <Type> para declarar el tipo de parámetro del array y el tipo de retorno de la función.







