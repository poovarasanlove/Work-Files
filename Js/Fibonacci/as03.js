var n=document.getElementById('in');
function get(){
  var b;
    document.getElementById('res').innerHTML=b.value;
    gt(b);
    
}

function gt(n){
var x=0, y=1;
var z=y;
for ( var i=2; i<=n;++i )
{
  z=x+y;
  x=y;
  y=z; 
} 
return z;
}
function clr(){
document.getElementById('res').innerHTML="";
document.getElementById('in').value="";

}