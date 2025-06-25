//! 1. Write a function greet() that prints Hello, World!.

// function greet() {
//     console.log("hello world");
// }

// greet()

//! 2. Write a function add(a, b) that returns the sum of a and b.

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(12, 12));

//! 3. Write a function square(n) that returns the square of n

// function sum(n) {
//     return n * n
// }

// console.log(sum(12));

//! 4.Write a function isEven(n) that returns true if n is even, otherwise false.

// function sum(number) {
//     if (number % 2 === 0) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// sum(12)

//! 5. Write a function getFullName(firstName, lastName) that returns the full name.

// function fullname(fname, sname) {
//     return fname + sname
// }

// console.log(fullname("prince", " sakariya"));

//! 6. Write a function findMax(arr) that returns the maximum number in an array.

// function name() {
//     let array = [2, 5, 7, 8, 9]
//     console.log(Math.max(...array));
// }
// name()

//! 7. Write a function reverseString(str) that returns the reversed string.

// function name() {
//     let string = "hello"
//     let rever = string.split("")
//     let result = rever.reverse().join()
//     return result
// }

// console.log(name());

//! 8. Write a function factorial(n) that returns the factorial of n.

// function factorial(n) {
//     let result = 1
//     for (let i = 2; i <= n; i++) {
//         result *= i
//     }
//     return result
// }

// console.log(factorial(5));

//! 9. Write a function isPalindrome(str) that checks if str is a palindrome.

//! 10. Write a function fizzBuzz(n) that prints numbers from 1 to n with:
// Fizz for multiples of 3,
// Buzz for multiples of 5,
// FizzBuzz for multiples of both.

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === "0" || i % 5 === "0") {
//             console.log("fizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizze");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(5);


//! advance function
//! 11. Write a function sumDigits(n) that returns the sum of digits of a number.
// function sumDigits(n) {
//     // Convert the number to positive (in case it's negative)
//     n = Math.abs(n);

//     // Convert number to string, split into digits, and sum them
//     let sum = 0;
//     let digits = n.toString().split('');

//     for (let digit of digits) {
//         sum += Number(digit);
//     }

//     return sum;
// }

// // Example usage
// console.log(sumDigits(123));  // Output: 6  (1 + 2 + 3)
// console.log(sumDigits(49));   // Output: 13 (4 + 9)
// console.log(sumDigits(-345));

//! Write a function findDuplicates(arr) that returns an array of duplicate elements.

// function findDuplicates() {
//     let array = [1, 3, 4, 6, 3, 4, 1];
//     let duplicates = [];

//     let seen = new Set();
//     for (let value of array) {
//         if (seen.has(value)) {
//             if (!duplicates.includes(value)) {
//                 duplicates.push(value);
//             }
//         } else {
//             seen.add(value)
//         }
//     }
//     return duplicates;
// }
// console.log(findDuplicates())


//! Write a function deepClone(obj) that returns a deep copy of an object.

// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
// let original = {
//     name: "Raj",
//     info: {
//         age: 20
//     }
// };



// let copy = deepClone(original);
// copy.info.age = 25
// console.log(original.info.age);

//! Write a function compose(f, g) that returns a function x → f(g(x)).
// function compose(f, g) {
//     return function (x) {
//         return f(g(x));
//     };
// }
// function add2(x) {
//     return x + 2
// }


// function multiply3(x) {
//     return x * 3
// }

// let composed = compose(add2, multiply3)
// console.log(composed(4));

//! Write a function debounce(func, delay) that delays function execution by delay ms.

// function debounce(func, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer); // જૂનો timer cancel કરો
//         timer = setTimeout(() => {
//             func.apply(this, args); // નવી call નિશ્ચિત delay પછી
//         }, delay);
//     };
// }

// function greet(name) {
//     console.log("Hello, " + name);
// }

// const debouncedGreet = debounce(greet, 1000); // greet function ને debounce કરો

// debouncedGreet("Prince");
// debouncedGreet("Raj");
// debouncedGreet("Jignesh");

// //? ex

// function searchQuery(q) {
//     console.log("Searching for:", q);
// }

// const debouncedSearch = debounce(searchQuery, 500);

// // User type કરે છે:
// debouncedSearch("p");
// debouncedSearch("pr");
// debouncedSearch("pri");
// debouncedSearch("prin");
// debouncedSearch("princ");
// debouncedSearch("prince"); // ⏱️ 500ms પછી માત્ર આ call થશે


//!  Write a function that takes an array and a function, and returns a new array with the function applied to each element.

// function number() {
//     let array = [2, 5, 8, 9, 99] 
//     let result = array.map((element) => {
//         return element * 2
//     })
//     return result
// }

// console.log(number());

//! 2️⃣0️⃣ Write a function that flattens a nested array (e.g., [1, [2, [3]], 4] → [1, 2, 3, 4]).

function sum() {
    let array = [1, [2, [3]], 4]
    let flatArray = array.flat(Infinity); // [1, 2, 3, 4]

    // Remove duplicates using Set (optional)
    let uniqueArray = [...new Set(flatArray)];
    return uniqueArray
}

console.log(sum());