document.title = "this is js";
document.getElementById("header").innerHTML = "hello";

document.getElementsByTagName("p")[0].style.color = "orange";
document.body.style.backgroundColor = "green";
document.getElementsByClassName("a")[0].innerHTML = "this is a class";
document.getElementsByClassName("a")[0].style.color = "red";
document.getElementsByClassName("a")[1].style.color = "blue";
document.getElementsByClassName("a")[2].style.color = "darkblue";
let c = document.getElementsByClassName("b");
c[0].style.color = "blue";
document.querySelectorAll(".ab")[0].style.color = "red";
function changeBackground() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    alert("background color changes randomly");
}
// function changeBackground(){
//     document.body.style.backgroundColor=
//     document.body.style.backgroundColor==="pink"?"blue":"red";
// }
function changetext(){
    document.getElementById("sd").innerHTML = "this is a new text";
    document.getElementById("sd").style.color = "red";
}

// function changetext(){
//     document.getElementById("sd").style.color = "red";
// }