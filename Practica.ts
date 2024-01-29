//tipos de datos

const nombre: string = "juan";

let age: number = 18;

let aa : any = "ef"
// los datos que son de tipo any es que ignore el tipo de dato , por lo tanto no podemos usar los metodos de cada tipo de dato

// aa.toLowercase() no me aparece el metodo y no lo puedo usar , hay que intentar evitar el any 


//*Funciones

// function saludar(name:string){
    //si definimos el tipo de dato que va a recibir esa funcion por parametros , podemos usar sus metodos ya que Ts los reconoce , pero si es de tipo any , no nos va a dejar usar los metodos asociados a ese tipo de dato
//     console.log(`Hello ${name.toUpperCase()}`)
// }

// saludar("juan")

// objetos como parametro de funciones

// function saludo({name,age}){
//     console.log(`Welcome ${name} , you are ${age} years`)
// }

//El problema aca con eso es que no podemos usar las propiedades de esos tipos por que son de tipo any , entonces toca asignarles un tipo.

// function saludo({name:string,age:number}){  
//     console.log(`Welcome ${name} , you are ${age} years`)
// }

//aqui hay un error grande, recordemos que como este codigo de Ts se compila y se vuelve JavaScript , en el objeto que estamos pasando , estamos asignando un valor a name y age , estamos diciendo que name es igual a string del mismo modo con age , para definir el tipo de dato tendrian que hacerse de algunas de estas 2 formas 

function saludo({name,age}:{name:string,age:number}){  
    console.log(`Welcome ${name} , you are ${age} years`) //podemos usar los metodos ahora ya que reconoce el tipo de cada propiedad del objeto
}
  
function saludo1Alternativa(persona:{name:string,age:number}){  
    const {name,age} = persona
    console.log(`Welcome ${name} , you are ${age} years`) //podemos usar los metodos ahora ya que reconoce el tipo de cada propiedad del objeto
}

//Tambien en Ts podemos asignar el tipo de dato que va a retornar , seria de esta manera.

function prueba({name,age}:{name:string,age:number}):number{
    return age  //obviamente vamos a retornar la edad ya que en la declaracion de la funcion le dijimos que el retorno va a ser de tipo number , si retornamos el name , va a lanzar error

}


//pasar una funcion como argumento a una funcion , ejemplo :


const  funcionqueRecibeOtrafuncion = (funcionRecibida)=>{
    return funcionRecibida("hola")
}


funcionqueRecibeOtrafuncion((name)=>{
    console.log(name)
})


//hasta aqui esas funciones no tiene tipos definidos , para eso vamos a darle tipo , y a la funcion que recibe la otra funcion como parametro el tipo de funcion que espera

                                        //definimos la funcion que vamos a recibir , y el void es para decirle que esa funcion no va a retornar nada o que no tiene por que devolver algo esa funcion o que nos da igual lo que devuelva y no lo tendremos en cuenta
const  funcionqueRecibeOtrafuncion1 = (funcionRecibida:(name:string)=>void )=>{
    return funcionRecibida("hola")
}


funcionqueRecibeOtrafuncion1((name)=>{
    console.log(name)
})

//****Forma de darle tipo a una funcion flecha */

const funcionFlechaSumar = (a:number,b:number):number =>{
    return a+b
}                                                                                   //Cualquiera de las 2 son validas

const funcionFlechaRestar : (a:number,b:number)=>number = (a,b) => {
    return a+b
}