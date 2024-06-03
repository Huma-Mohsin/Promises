//we can use try and catch to handle error , this avoids application to be crashed...

async function fetchdata(){
    try{
        let url="https://jsonplaceholder.typicode.com/todos/1";
        let fetchingdata=await fetch(url);
        let res=await fetchingdata.json();//if we donot use await we cannot get result at console.
        console.log(res)
    }
    catch(error){
console.log("Error Occured...")
    }
}
//invookefunction 
fetchdata();
//Author-huma Mohsin