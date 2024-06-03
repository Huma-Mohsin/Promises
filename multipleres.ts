//Case:2
// HAndle Multiple Resolves as:
//we  can  use the Promise<T> generic type to specify the type of the resolved value:i.e Promise<(string|string[])[]>

//By specifying the type of the Promise as Promise<(string|string[])[]>, we're telling TypeScript that the resolved value will be an array of strings or arrays of strings, and it will infer the type of the res parameter automatically.

let pro:Promise<(string|string[])[]>=new Promise((resolve,reject)=>{
    console.log("Promise pending.....")
setTimeout(()=>{
    console.log("promise fullfilled")
    resolve(["Success",["promise Resolved","by","Huma"]])//multiple resolves
},2000)
})

pro.then((res) => {
	console.log(res[0]); // "Success"
	console.log(res[1]); // ["promise Resolved","by","Huma"]
})

//we concluded that If we want to return multiple values, we can wrap them in an array or object and pass that as the argument to resolve. For example:

// resolve(["Success", ["promise Resolved","by","Huma"]])

// and in .then method we can call it like below:

// mypromise.then((res) => {
// 	console.log(res[0]); // "Success"
// 	console.log(res[1]); // ["promise Resolved","by","Huma"]
// })
//Author-Huma Mohsin