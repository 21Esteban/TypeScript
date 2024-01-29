//hacemos nuestar primera clase 

//hacemos un objeto con unas propiedades definidas

class Mascota{
    private nombre : string;
    color :string

    //definimos una funcion llamada constructor para poder crear instancias de este objeto o clase
    constructor(nombre:string,color:string){
        this.nombre = nombre
        this.color = color
    }

    //hacemos un metodo que nos muestre el nombre 

    mostrarNombre():string {
        return this.nombre
    }

}


let perro = new Mascota("lucas","blanco")
// console.log(perro.name) // como definimos ese atributo con un private , no vamos a poder acceder a ese valor fuera de la clase pero con un metodo dentro de la clase si vamos a poder acceder
console.log(perro.color)

//ahora vemos el nombre gracias a un metodo que accede a esa propiedad privada
console.log(perro.mostrarNombre())


//!Decoradores


//*Decoradores de clase 

//Basicamente un decorador es una funcion , y sirven para extender las funcionalidades de una clase

function Repository(target:Function){
    console.log("Soy un decorador y lo que voy a hacer es agregar metodos a esta clase ",target)
    target.prototype.create = function (entity:object){
        console.log(entity)
    }
}


//Todo Decoradores de clase 

export class UserRepository{

}



// Decoradores
// Un decorador es un tipo especial de declaración que se puede adjuntar a una declaración de clase , método , descriptor de acceso , propiedad o parámetro . Los decoradores usan el formulario @expression, donde expressiondeben evaluar una función que se llamará en tiempo de ejecución con información sobre la declaración decorada.

// Por ejemplo, dado el decorador, @sealedpodríamos escribir la sealedfunción de la siguiente manera:

function sealed(target) {
    // do something with 'target' ...   
  }