export function whatsMyType<T>(argument:T):T {

    return argument;
}

const amString = whatsMyType<string>("Hola mundo");
const amNumber= whatsMyType(3);
const amArray = whatsMyType([1,2]);

console.log(amString.split(" "));