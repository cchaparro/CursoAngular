export interface Passenger {
    name: string;
    children?: string[];
}


const passenge1: Passenger ={
    name:"Melisa",
    children:["Laya", "Sam"]
}


const passenge2: Passenger ={
    name:"Cristian",
  
}


const printChildren = (passenger:Passenger)=>{
    const howManyChildreen = passenger.children?.length ||0;
    console.log(passenger.name, howManyChildreen);
}

printChildren(passenge2)