/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
// function doubleValues(arr){
    function doubleValues(arr) {
       
        var doubledArray = [];

        arr.forEach(function(value) {
            doubledArray.push(value * 2);
        });

        return doubledArray;
    }
    
//     // Test cases
    console.log(doubleValues([1, 2, 3]));     // Output: [2, 4, 6]
    console.log(doubleValues([5, 1, 2, 3, 10])); // Output: [10, 2, 4, 6, 20]
    
// }

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {

    var evenArray = [];

    arr.forEach(function(value) {
        
        if (value % 2 === 0) {
           
            evenArray.push(value);
        }
    });

    return evenArray;
}


console.log(onlyEvenValues([1, 2, 3]));     // Output: [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // Output: [2, 10]

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    
    var resultArray = arr.map(function(str) {
        
        if (str.length >= 2) {
        
            return str[0] + str[str.length - 1];
        } else {

            return str;
        }
    });

    return resultArray;
}


console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])); // Output: ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));        // Output: ['hi', 'ge', 'se']



console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])); // Output: ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));        // Output: ['hi', 'ge', 'se']

    


/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    function addKeyAndValue(arr, key, value) {

        var newArray = arr.map(function(obj) {

            return { ...obj, [key]: value };
        });
    
      
        return newArray;
    }
    
    var inputArray = [
        { name: 'Elie' },
        { name: 'Tim' },
        { name: 'Matt' },
        { name: 'Colt' }
    ];
    
    var resultArray = addKeyAndValue(inputArray, 'title', 'instructor');
    console.log(resultArray);
    
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    
    str = str.toLowerCase();

    var vowelCounts = {};

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        var char = str[i];


        if (vowels.includes(char)) {
            vowelCounts[char] = (vowelCounts[char] || 0) + 1;
        }
    }

    return vowelCounts;
}

console.log(vowelCount('Elie')); // Output: {e:2, i:1}
console.log(vowelCount('Tim')); // Output: {i:1}
console.log(vowelCount('Matt')); // Output: {a:1}
console.log(vowelCount('hmmm')); // Output: {}
console.log(vowelCount('I Am awesome and so are you')); // Output: {i: 1, a: 4, e: 3, o: 3, u: 1}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    
    var doubledArray = arr.map(function(value) {
        return value * 2;
    });

  
    return doubledArray;
}

// Test cases
console.log(doubleValuesWithMap([1, 2, 3]));   // Output: [2, 4, 6]
console.log(doubleValuesWithMap([1, -2, -3])); // Output: [2, -4, -6]

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
   
    var resultArray = arr.map(function(value, index) {
        return value * index;
    });


    return resultArray;
}

// Test cases
console.log(valTimesIndex([1, 2, 3]));   // Output: [0, 2, 6]
console.log(valTimesIndex([1, -2, -3])); // Output: [0, -2, -6]


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {

    var resultArray = arr.map(function(obj) {
        return obj[key];
    });

    return resultArray;
}

var inputArray = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
];

console.log(extractKey(inputArray, 'name')); // Output: ['Elie', 'Tim', 'Matt', 'Colt']


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
   
    var resultArray = arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });

   
    return resultArray;
}

var inputArray = [
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia' },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele' }
];

console.log(extractFullName(inputArray)); // Output: ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
   
    var resultArray = arr.filter(function(obj) {
        return key in obj;
    });

    return resultArray;
}


var inputArray = [
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia', isCatOwner: true },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele', isCatOwner: true }
];

console.log(filterByValue(inputArray, 'isCatOwner'));
// Output: [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]


/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, value) {
    
    var foundElement = arr.find(function(element) {
        return element === value;
    });

    
    return foundElement;
}


console.log(find([1, 2, 3, 4, 5], 3));  // Output: 3
console.log(find([1, 2, 3, 4, 5], 10)); // Output: undefined

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, value) {
    
    var foundObject = arr.find(function(obj) {
        return obj[key] === value;
    });

    
    return foundObject;
}


var inputArray = [
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia', isCatOwner: true },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele', isCatOwner: true }
];

console.log(findInObj(inputArray, 'isCatOwner', true));
// Output: {first: 'Tim', last: 'Garcia', isCatOwner: true}


/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    
    var resultString = str.toLowerCase().replace(/[aeiou]/gi, '');

    return resultString;
}

console.log(removeVowels('Elie'));    // Output: 'l'
console.log(removeVowels('TIM'));     // Output: 'tm'
console.log(removeVowels('ZZZZZZ'));  // Output: 'zzzzzz'


/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    
    var resultArray = arr.filter(function(num) {
        return num % 2 !== 0;
    }).map(function(oddNum) {
        return oddNum * 2;
    });


    return resultArray;
}


console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // Output: [2, 6, 10]
console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // Output: []
