//try with interface, interface is created by observing an output.
interface ObjType{
    userId:number;
    id:number;
    title:string;
    complete:boolean;
}
async function fetchdata(){
    try {
        
   
    let url="https://jsonplaceholder.typicode.com/todos/1";
    let fetchdata=await fetch(url);
    let responsed=await fetchdata.json();
    console.log(responsed);
} catch (error) {
        console.log("An Error Occured")
}

}

//invoke function 
fetchdata();
//Author-Huma Mohsin