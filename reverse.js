const numbers = [1, 2, 3, 4, 5];
// reverse    = [5, 4, 3, 2, 1]
const reversed = [];


/* 
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    reversed.unshift(numbers[i]);
}
console.log(reversed);  
*/


/* 
for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);  
*/


/* 
for (const num of numbers) {
    reversed.unshift(num);
}
console.log(reversed);   
*/


console.log(numbers)
// numbers.reverse();
const result = numbers.reverse();
console.log(numbers);
console.log(result);