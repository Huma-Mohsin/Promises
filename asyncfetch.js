"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// More Advance to fetch API Using async function.
async function fetchData() {
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    let fetch_data = await fetch(url);
    let response = await fetch_data.json();
    console.log(response);
}
//invoke function
fetchData();
//Author-Huma Mohsin
