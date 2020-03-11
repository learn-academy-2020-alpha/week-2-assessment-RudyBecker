// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


const myFunction = (num) => {
    if (num % 3 == 0) {return `${num} is divisible by three`
	}
	else { return `${num} is not divisible by three`
    }
}
console.log(myFunction(num1))
console.log(myFunction(num2))
console.log(myFunction(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const myCapitalizer = randomNouns.map(randomNouns => randomNouns.toUpperCase());

console.log(myCapitalizer)


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

var sortedDataArray = mixedDataArray.filter((Number) => parseInt(Number) == Number);

console.log(sortedDataArray.sort());




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var newVowelTester1 = vowelTester1.split("")
var vowels = ["a","e","i","o","u"]

var vowelTester2 = "throw"
// Expected output: 3
var newVowelTester2 = vowelTester2.split("")

function findCommonElement1(array1, array2) {

    // Loop for array1
    for(let i = 0; i < array1.length; i++) {

        // Loop for array2
        for(let j = 0; j < array2.length; j++) {

            // Compare the element of each and
            // every element from both of the
            // arrays
            if(array1[i] == array2[j]) {
                return i;
            }
        }
    }
    return false;
}

console.log(findCommonElement1(newVowelTester1,vowels))
console.log(findCommonElement1(newVowelTester2,vowels))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1,operator, num2) => {
	if (operator == "/" && (num1==0 || num2==0)){
		return "Can't divide by 0!";
	}
	else if (operator == "+") {
		return num1 + num2;
    }
  else if (operator == "-") {
    return  num1 - num2;
	} else if (operator == "*") {
		return num1 * num2;
    }
		else if (operator == "/") {
			return num1 / num2;
		}
};





// Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*" 9))
// Expected output: 27

// console.log(calculator(16, "+" 3))
// Expected output: 19

// console.log(calculator(89, "/" 0))
// Expected output: "Can't divide by 0!"
