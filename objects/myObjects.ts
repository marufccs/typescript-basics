//Basics
function createUser({name: string, isPaid: boolean}){}

createUser({name: 'Maruf', isPaid: false});

//Returning an object
function createCourse():{name:string, price: number}{
    return {name: 'reactjs', price: 399}
}

//Type
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser2(user: User): User{
    return {name: '', email: '', isActive: true}
}

createUser2({name: '', email: '', isActive: true})

//readonly is no one can modify it. ? means if they don't provide any value, it shouldn't be a problem.
type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number
}

let myUser1: User1 = {
    _id: '123',
    name:'h',
    email: 'h@h.com',
    isActive: false
}

myUser1.email = 'h@gmail.com';

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}