let arr = new Array();

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");

function str() {
    arr[0] = document.getElementById("inp1").value;
    arr[1] = document.getElementById("inp2").value;
    arr[2] = document.getElementById("inp3").value;
    res1.innerHTML = arr[0];
    res2.innerHTML = arr[1];
    res3.innerHTML = arr[2];
}
function dlt() {
    let a = prompt("Enter Index Number To Delete");
    if (a == 0) {
        res1.style.color = "red";
    }
    else if (a == 1) {
        res2.style.color = "red";
    }
    else if (a == 2) {
        res3.style.color = "red";
    }
    else {
        alert("Wrong Input");
    }
}
function upd() {
    let upi = prompt("Enter Index Number To Update");
    let valup = prompt("Enter Updated Value");
    arr[upi] = valup;
    if (upi == 0) {

        res1.style.color = "green";
    }
    else if (upi == 1) {
        res2.style.color = "green";
    }
    else if (upi == 2) {
        res3.style.color = "green";
    }
    else {
        alert("Wrong Input");
    }
    res1.innerHTML = arr[0];
    res2.innerHTML = arr[1];
    res3.innerHTML = arr[2];
}