// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

for (let i = 0 ; i < numbers.length ; i++){

    if(numbers[i] === Math.min(...numbers))

    minNumber =  numbers[i]
   
}
console.log(minNumber)