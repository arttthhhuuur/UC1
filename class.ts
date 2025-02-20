export class Cat{
    name:string;
    weight:number;

    //contrutuctor
    constructor(nameCat:string, weightCat:number){
        this.name = nameCat
        this.weight = weightCat
    }

    meow():void{
        console.log("meow meow")
    }
    eat (quantity:number):void{
        console.log("the cat has eaten"+ quantity);
    }
}

const meuGato = new Cat("Mia", 5.0);
meuGato.meow();
meuGato.eat(200);