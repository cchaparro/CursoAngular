function addNumbers(a: number, b: number) {
    return a + b;
}
const addNumbersArrow = (a: number, b: number): string => {

    return `${a + b}`;

}

const multiply = (firstNumber: number, secondNumber?: number , base:number =2): number => {

    return firstNumber*base;
}
//const resultado: number =multiply(5);
//const resultado2: string =addNumbersArrow(1,2)
//const resultado3: number =addNumbers(1, 2)
///console.log({resultado,resultado2,resultado3});

interface Character {
    name:string;
    hp:number;
    showHp:()=> void;
}


export { }