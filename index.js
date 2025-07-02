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
// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>
//             { console.log("featching data fot id",dataid);
//                 resolve("success")
//                 },2000);
//                 });
//         }
// let myPromise = getData(1).then((data) => { console.log("this is then",data);}).catch((error) => { console.log("this is catch",error);}); 
// let getpromise() => {
//     return new Promise((resolve,reject)=> {
//         console .log("this is promise");
//         resolve("data is here");
//         });
        

// }
// let result=getpromise();
//         result.then((data) => {
//              console.log("this is then",data);
//             }).catch((error) => { 
//                 console.log("this is catch",error);
//             }); 
// function f1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("f1");
//             resolve("success from f1");
//         }, 2000);
//     });
// }

// function f2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("f2");
//             resolve("success from f2");
//         }, 2000);
//     });
// }

// console.log("fetching");
// f1().then((data) => {
//     console.log("this is then", data);
//     console.log("dui");
//     return f2();
// }).then((data) => {
//     console.log("this is then", data);
// });
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching data for id", id);
      resolve({ status: "success", id });
    }, 2000);
  });
}

async function fetchData() {
  try {
    let data1 = await getData(1);
    console.log("data1", data1);
    let data2 = await getData(2);
    console.log("data2", data2);
  } catch (error) {
    console.log("error", error);
  }
}

async function getnextData() {
  console.log("getnextData step 1");
  await getData(1);
  console.log("getnextData step 2");
  await getData(2);
  console.log("getnextData step 3");
  await getData(3);
}

fetchData();
getnextData();