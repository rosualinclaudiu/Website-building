class Om{
    constructor(name){
        this.name = name
    }
}

class Animal{
    // constructor este folosit pentru atribute
    constructor(age){
        this.age = age
    }
    cry(){
        // metoda
        console.log("Niciun sunet")
    }
}

class Dog extends Animal{
    cry(){
        // metoda
        console.log("Ham")
    }
}

// Clasa
// Relatie is-a
class Cat extends Animal{

    constructor(age, owner){
        // 
        super(age)
        // has a relation
        this.owner = owner
    }

    cry(){
        // metoda
        console.log("Miau Miau")
    }

}

class RussianBlueCat extends Cat{
    // suprascriere
    cry(){
        // metoda
        console.log("Miau Miau Miau Miau")
    }
}


let propietar = new Om("Andrei")
let pisicaTommy = new Cat(2, propietar)
console.log(pisicaTommy.owner.name)
// obiect??
let pisicaRino = new RussianBlueCat(2)

let dog = new Dog(1)





let pisicaTommy2 = new Cat(2)
let pisicaTommy3 = new Cat(2)

class MedicVeterinar extends Om{
    // Polimorfism
    verificaSunetul(animal){
        animal.cry()
    }
}

let veterinar = new MedicVeterinar

veterinar.verificaSunetul(pisicaRino)
veterinar.verificaSunetul(pisicaTommy)
veterinar.verificaSunetul(dog)



// chem o functie din clasa
pisicaRino.cry()
pisicaTommy.cry()