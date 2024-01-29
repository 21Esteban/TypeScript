console.log("hello world");
//hora vamos a compilar el codigo para js ctrl + shift + ñ  para abrir la terminal
//comando para no estar que compilando el a4rchivo a cada rato tsc archivo -w
var namee = "juan";
document.write(namee.toUpperCase());
var edad;
edad = 12;
console.log(edad);
var tupla = ["hola", 14];
var pelambre = {
    name: "juan",
    age: 18,
};
console.log(typeof (pelambre));
var createHero = function (hero) {
    var name = hero.name, age = hero.age;
    return { name: name, age: age, isActive: true };
};
var heroe2 = createHero({ name: "Camilo", age: 18 });
console.log(heroe2);
function createHome1(home) {
    var address = home.address, size = home.size;
    return { id: crypto.randomUUID(), address: address, size: size };
}
var casa1 = createHome1({ address: "Cra 49", size: "50m**2" });
console.log(casa1);
