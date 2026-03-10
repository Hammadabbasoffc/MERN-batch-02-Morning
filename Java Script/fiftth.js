// console.log("Start")

// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 5000);


// setTimeout(() => {
//     console.log("Inside setTimeout with 200ms")
// }, 200);

// console.log("End")


// let promiseExample = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Promise resolved successfully")
//     } else {
//         reject("Promise rejected")
//     }
// })

// promiseExample.then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

// console.log(promiseExample);



// function delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     });
// }
// async function run() {

//     console.log("Start");

//     await delay();

//     console.log("After database connect");

// }

// run();






async function getData() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts?Dolittle");




    let data = await response.json();

    console.log(data);

}

getData();


