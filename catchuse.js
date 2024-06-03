"use strict";
// to handle error.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Handle Error only");
console.log("*****************");
let myprom = new Promise((resolve, reject) => {
    console.log("Promise pending....");
    setTimeout(() => {
        console.log("Promise Rejected....");
        reject("Throw an Error");
    }, 4000);
});
//  myprom.then((res) => console.log(res)) // this will not be called
//
myprom.catch((err) => console.log(err)); // this will log "Throw an Error"
console.log("\n");
console.log(" handle both success and error cases");
console.log("************************************");
//or If we want to handle both success and error cases, we can use then with two callback functions, like this:
myprom.then((res) => console.log(res), (err) => console.log(err));
//Author-Huma Mohsin
