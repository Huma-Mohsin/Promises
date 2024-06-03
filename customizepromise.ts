//Promises in JavaScript are a fundamental concept for handling asynchronous operations. A Promise represents a result that may not be available yet, but will be resolved at some point in the future.

//A Promise is an object that represents an asynchronous operation's result. It can be in one of three states:

// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Successful operation, with a value attached.
// 3. Rejected: Failed operation, with a reason (error) attached.

//Creating a Promise:-

//We can create a Promise using the Promise constructor and passing a callback function that resolves or rejects the Promise.

let mypromise = new Promise((resolve: any, reject) => {
  console.log("Pending status");
  // Asynchronous operation here below:
  setTimeout(() => {
    console.log("Promise Resolved");
    resolve("Success"); //This line doesnot show on output until we use .then or .catch......
    resolve(["promise Resolved", "by", "Huma"]); //This is not resolved ,Only the first call to resolve is considered, and the second call is ignored.
  }, 2000);
});

//Using Promises:-

//Case:1:-

//we can use Promises with the then method to handle the result when it's available or catch method to handle an error.
mypromise.then((res) => console.log(res)); //This shows line 18 output and doesnot show line 19 output b/c  a Promise can only be resolved once. When We call resolve("Success"), the Promise is considered resolved, and any subsequent calls to resolve or reject are ignored.

//Only the first call to resolve is considered, and the second call is ignored. That's why we can only see the output "Success" and not the array

//Author-Huma Mohsin
