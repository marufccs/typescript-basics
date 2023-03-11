function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

//to proivide multiple values
function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser('Maruf', 'maruf@gmail.com', true);

//Arrow Function with default value 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser('Maruf', 'Maruf@gmail.com')

addTwo(5);
getUpper('Maruf');

//map function
const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero): string => {
    return `hero is ${hero}`
})

//void 
function consoleError(errMsg: string): void {
    console.log(errMsg);
}

//never
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}


export {};