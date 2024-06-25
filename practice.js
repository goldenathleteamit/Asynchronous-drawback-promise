//asynchronous : second task do not wait for first task to complete
 //ex-1

 console.log("process 1");
 setTimeout(()=>{
    console.log("process 2");
 },2000);
 console.log("process 3");

 //ex-2 // drawback of asynchronous
 let a=10;
 let b=20;
 setTimeout(()=>{
    b=30;
 },2000);
 console.log(a+b);   //it will take b=20,kyuki console wali statement pehle hi print hojyegi .

 //ex-3 how to handle
 //we use promise
 let x=10;
 let y=20;
 let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
 })
 promise.then((res)=>{
     console.log(a+res);
 });




