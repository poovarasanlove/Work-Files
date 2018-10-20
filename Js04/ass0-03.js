
function sub() {
    var name = document.getElementById("me").value;
    var age = document.getElementById("age").value;
    document.getElementById("dis").innerHTML = name;
    if (age >= 18) {
        document.getElementById("dis").innerHTML += "age is valid for voting";
    }
    else {
        document.getElementById("dis").innerHTML += " age is not valid for voting";

    }
}
function clr() {
    document.getElementById("me").value = "";
    document.getElementById("age").value = "";
}