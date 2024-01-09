function addTwo(num:number)
{
    return num+2;
}

console.log(addTwo(5));



//ARROW FUNCTIONS   

let loginUser=(name:string,email:string,isPaid:boolean=false)=>
{
    
    console.log(isPaid);
}

loginUser("Abhishek","av@gmail.com");


// BETTER WAY TO WRITE FUNCTIONS:

function betterFunction():string{
    return "Yo";
}
betterFunction();

const isPaid=(name:string): boolean=>{

console.log(name)
    return false;
}

isPaid("abhi");
export {};