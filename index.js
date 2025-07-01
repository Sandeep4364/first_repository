// // // console.log("hello world");
// // // function sayHello(){
// // //     console.log("hello world");
// // // }
// // // sayHello();
// // // console.log("js is fun");
// // // setTimeout(()=>{
// // //     console.log("hello world");
// // // }, 5000);
// // // console.log("three");

// // // console.log("four");
// // function sum(a,b){
// //     console.log(a+b);

// // }
// // function calculator(a,b,c){
// //     c(a,b);
// // }
// // calculator(1,2,sum);
// // calculator(1,2,(a,b)=>{
// //     console.log(a+b);
// // });
// // for(let i=0;i<=4;i++){
// //     int str="";
// //     for (let j=0;j<=0; j++){
// //         str+="j";
// //     }----------------------
// //     console.log(i,str);
// // }
// function getData(id){
//     setTimeout (() => { 
//         console.log("this is id",id); 
//         }, 2000);
// }
// getData(1);
// getData(2); 
// function getData(id,getnextdata){
//     setTimeout (() => {
//         console.log("this is id",id);
//         if (getnextdata){
//             getnextdata();
//         }
//     }, 2000);
// }
// getData(1,()=> {
//     console.log("this is next data");
//     getData (2,()=> { 
//         console.log("this is next data");
//         getData (3);

//      });

// });
// const myPromise = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("data is here");
//             } else {
//                 reject("data is not here");
//                 }
//             }, 2000);
//     });
                // myPromise.then((data) => {
                //     console.log("this is then",data);
                //     }).catch((error) => {                
                //         console.log("this is catch",error);
                //         });
// let Promise= new Promise((resolve,reject)=>
//     {  console.log("hello there")
//         if (1<0){
//             resolve(123);
//             }
//             reject("something went wrong");
//         });
//     myPromise.then((data) => {
//                     console.log("this is then",data);
//                     }).catch((error) => {                
//                         console.log("this is catch",error);
//                         });
function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>
            { console.log("featching data fot id",dataid);
                resolve("success")
                },2000);
                });
        }
let myPromise = getData(1).then((data) => { console.log("this is then",data);}).catch((error) => { console.log("this is catch",error);}); 
