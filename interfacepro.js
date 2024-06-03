"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchdata() {
    try {
        let url = "https://jsonplacedholder.typicode.com/todos/1";
        let fetchdata = await fetch(url);
        let responsed = await fetchdata.json();
        console.log(responsed);
    }
    catch (error) {
        console.log("An Error Occured");
    }
}
//invoke function 
fetchdata();
//Author-Huma Mohsin
