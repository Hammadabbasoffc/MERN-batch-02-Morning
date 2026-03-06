// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const user1 = new User('Alice', 30);

// console.log(typeof User);

// user1.greet();


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// const user1 = new User('Alice', 30);

// console.log(User.prototype);

// user1.greet();




// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function () {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const user1 = new User('Alice', 30);
// const user2 = new User('Alice', 30);

// console.log(User.prototype);
// user1.greet();



function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {

        console.log("Before new Key", parentKey);



        const newKey = parentKey ? `${parentKey}.${key}` : key;





        // console.log("parent Key", parentKey);
        console.log("new Key", newKey);

        console.log(".........");


        const value = obj[key];

        console.log("here we show value ", value);


        if (typeof value === "object" && value !== null) {
            // console.log(result);

            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

const user = {
    name: "Hammad",
    address: {
        city: "Gujranwala",
        zip: 52250
    },
    skills: {
        frontend: {
            js: true,
            react: true
        }
    }
};

console.log(flattenObject(user));