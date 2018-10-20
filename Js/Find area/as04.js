
function sq(){
document.getElementById("q").style.display = "block";
document.getElementById("btt").style.display = "block";
op='squ';
}
function re(){
document.getElementById("btt").style.display = "block";
document.getElementById('e').style.display="block";
op='rec';

}
 function cl(){
document.getElementById("btt").style.display = "block";
document.getElementById('l').style.display="block";
op='cir';

}
function tr(){
document.getElementById("btt").style.display = "block";
document.getElementById('r').style.display="block";
 op='tri';

}
function sub(){
    if(op=='squ')
    {
      var n1= +document.getElementById('q1').value;
      document.getElementById('area').innerHTML= n1*n1 +' cm is area of the square' ;
    }
    if(op=='rec')
    {
      var r1= +document.getElementById('r1').value;
      var r2= +document.getElementById('r2').value;
      document.getElementById('area').innerHTML= r1*r2 +' cm is area of the rectangle' ;
    }
    if(op=='cir')
    {
      var c1= +document.getElementById('c1').value;
      document.getElementById('area').innerHTML= 3.14159*(c1*c1) +' cm is area of circle' ;
    }
    if(op=='tri')
    {
      var t1= +document.getElementById('t1').value;
      var t2= +document.getElementById('t2').value;
      document.getElementById('area').innerHTML= (t1*t2)/2 +' cm is area of the triangle' ;
    }
}
