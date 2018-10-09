var dis=document.getElementById('dis');
function num(val){
    if (dis.innerHTML != 0)
     {
        dis.innerHTML = dis.innerHTML + val;
    } else {
        dis.innerHTML = val;
    }
}
function clr(){
    dis.innerHTML="0";
}
function dot()
{
    if(dis.innerHTML.includes('.')==false){
        dis.innerHTML +='.';
}
}
var num1;
var operation;

function add() {
    num1 = dis.innerHTML;
    dis.innerHTML = "";
    operation = 'add';
}

function diff() {
    num1 = dis.innerHTML;
    dis.innerHTML = "";
    operation = 'diff';
}

function multi() {
    num1 = dis.innerHTML;
    dis.innerHTML = "";
    operation = 'multi';
}

function divi() {
    num1 =dis.innerHTML;
    dis.innerHTML = "";
    operation = 'divi';
}

function eq() {
    var num2 = dis.innerHTML;
    if (operation == 'add') {
        dis.innerHTML = parseFloat(num1) + parseFloat(num2);
    }
    if (operation == 'diff') {
        dis.innerHTML = parseFloat(num1) - parseFloat(num2);
    }
    if (operation == 'multi') {
        dis.innerHTML = parseFloat(num1) * parseFloat(num2);
    }
    if (operation == 'divi') {
        dis.innerHTML = parseFloat(num1) / parseFloat(num2);
    }
}
