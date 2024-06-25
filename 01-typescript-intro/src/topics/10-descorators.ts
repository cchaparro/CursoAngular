

function classDecotor<T extends { new(...args: any[]): {} }>(
    costructor: T) {

    return class extends costructor {
        newProperty = "New Property";
        hello = "override";

    }
}
@classDecotor
export class SuperClass {

    public myProperty: string = "ACB";
    print() {
        console.log("Hola mundo");
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass)