console.log("hola mundo")

//hay varios tipos de decoradores , de clase , de metodos , y de parametros 

//vamos a hacer un decorador
function Log(funcionObjetivo:Function):void{
    console.log(first)
}

//vamos a hacer nuestra clase


@Log
class Carro{

    marca : string;
    año : number


    //hacemos un constructor que basicamente es un metodo que crea una instancia de Carro

    constructor(marca:string,año:number){
        this.marca = marca
        this.año = año
    }
}