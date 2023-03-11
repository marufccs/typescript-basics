//if you're not sure your data will be a number or a string or anything, use | this.
let score: number | string = 33

score = 55

score = "55"

//
function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    } 
}

//array
const date: (string | number | boolean)[] = ["1", "2", 3, true]