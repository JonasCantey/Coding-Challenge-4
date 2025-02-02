//Task 1
console.log("Task 1")

let purchaseAmount = 120        //Declaring an initial purchase amount
const discount = 0.9            //Declaring a constant dicount amount of 10%
if (purchaseAmount > 100) {     //Here I let an if statement say if purchaseAmount is 
    purchaseAmount = purchaseAmount * discount  //greater than 100, multiply by discount
}

console.log(`Total amount after discount: $${purchaseAmount}`);     //Used a template literal to log the string and variable

//Task 2
console.log("Task 2")

let sales = [100, 140, 180, 230, 300];       //Declaring an array of sales
let totalSales = 0;                        //Declaring a variable of totalSales, I put its value
                                            //at zero to make it easier to incorporate it in the for loop
for (let i=0; i < sales.length; i++) {      //For loop that lays out the following conditions, i=0
    totalSales += sales[i];               //If i is less than sales.length then add all sales together.
}

console.log(`Total Revenue: $${totalSales}`); //Template literal using the totalSales variable.