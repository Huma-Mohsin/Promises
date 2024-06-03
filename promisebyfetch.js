"use strict";
//ADVANCE USE OF PROMISES :-
Object.defineProperty(exports, "__esModule", { value: true });
//PROMISES BY fetch()
// fetch() is a built-in JavaScript function that returns a Promise. It's used for making network requests, like fetching data from an API or loading a file.
let url = 'https://jsonplaceholder.typicode.com/todos/1'; //this api is copied from https://jsonplaceholder.typicode.com/
//let fetchData= fetch(url).then((res)=>console.log(res))//this shows unreadable version of code as an output.
let fetchData = fetch(url).then((res) => res.json()) //this shows readable version .
    .then((res) => console.log(res));
console.log(fetchData); //Author-Huma Mohsin
