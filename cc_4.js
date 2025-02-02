//Task 1
console.log("Task 1")

let purchaseAmount = 120        //Declaring an initial purchase amount
const discount = 0.9            //Declaring a constant dicount amount of 10%
if (purchaseAmount > 100) {     //Here I let an if statement say if purchaseAmount is 
    purchaseAmount = purchaseAmount * discount  //greater than 100, multiply by discount
}

console.log(`Total amount after discount: $${purchaseAmount}`);     //Used a template literal to log the string and variable