// //  For Each Method

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index) => console.log(index + ": " + number))

// //  Map Method

// const newArray = numbers.map((number) => number * 2);
// console.log(newArray);


// const filteredNumbers = numbers.filter((number) => number === 3);
// console.log(filteredNumbers);

// const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 3);
// console.log(sum);


// const numbers1 = [10, 2, 5];
// numbers1.sort((a, b) => a - b);
// console.log(numbers1);




// numbers.map((number) => number * 2);

// Map polyfill

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = []
        console.log("this is values of this", this);

        for (let i = 0; i < this.length; i++) {
            const value = callback(this[i])
            result.push(value)
        }
        return result
    }
}

const arr = [1, 2, 3, 4, 5, 6]
const banaHowaMap = arr.map((number) => number * 2)
const maraBanayaMap = arr.myMap((number) => number * 2)

console.log(banaHowaMap);
console.log(maraBanayaMap);

