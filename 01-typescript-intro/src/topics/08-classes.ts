
export class Person {

    constructor(public name: string,
        private addres: string = "no addres") { }
}


export class Hero {

    constructor(public alterEgo: string,
        public age: number,
        public realName: string, public person: Person) {

    }
}
const tony= new Person("Tony")
const ironman = new Hero("iroman", 33, "Tony", tony);
console.log(ironman);