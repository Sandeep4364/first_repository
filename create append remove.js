let a=document.createElement("p")
a.textContent="Hello , World!";
let b=document.createElement("p")
b.textContent="pratham loves isha";
// document.body.appendChild(a);
document.getElementById("dv").appendChild(a);
document.getElementById("dv").appendChild(b);
document.getElementsByClassName("abba")[0].appendChild(b).style.color="red";
// setTimeout(() => {
//     let re = document.getElementsByClassName("abba")[2];
//     if (re) {
//         re.remove();
//     }
// }, 2);
let c=document.createElement("p");
c.innerHTML="this is javascript with html";
document.body.appendChild(c).style.color="purple";
setTimeout(() => {
    let d = document.createElement("p");
    d.textContent = "JavaScript is fun";
    d.style.color = "violet";
    document.body.appendChild(d);
}, 30);