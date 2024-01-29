console.log("hello world")

//hora vamos a compilar el codigo para js ctrl + shift + ñ  para abrir la terminal

//comando para no estar que compilando el a4rchivo a cada rato tsc archivo -w

var namee:string = "juan"


document.write(namee.toUpperCase())


var edad:number


edad = 12

console.log(edad)

var tupla : [string,number] = ["hola",14]   

//podemos definir nuestros tipos 

type Hero = {
   readonly id?:number,
    name:string,
    age:number,
    isActive?:boolean

}

var pelambre:Hero={
    name:"juan",
    age:18,
}

console.log(typeof(pelambre))

var createHero = (hero:Hero):Hero=>{
    const {name,age} = hero
    return {name,age,isActive:true}
}

var heroe2:Hero = createHero({name:"Camilo",age:18})

console.log(heroe2)

// readonly:
// readonly es un modificador que se puede aplicar a propiedades en TypeScript. Indica que una propiedad solo puede ser asignada durante la inicialización o dentro del constructor de la clase.
// Cuando una propiedad es declarada como readonly, no se permite reasignarle un valor en ningún otro lugar del código.
// Es útil cuando deseas asegurarte de que una propiedad no sea modificada después de su inicialización.


// Supongamos que estás construyendo una aplicación de gestión de usuarios utilizando NestJS. Tienes una clase User que representa a un usuario con varias propiedades, y quieres que el campo id sea de solo lectura después de la creación del usuario. Esto es importante para garantizar que el ID no se pueda modificar accidentalmente una vez que se haya establecido.
//*Optional properties
type HomeId = `${string}-${string}-${string}-${string}-${string}`
type Home={
    readonly id?:HomeId,
    address:string,
    size:string
}
 


function createHome1(home:Home):Home{    
    const {address,size} = home
    return {id:crypto.randomUUID(),address:address,size:size}
}

var casa1:Home = createHome1({address:"Cra 49",size:"50m**2"})

console.log(casa1)
