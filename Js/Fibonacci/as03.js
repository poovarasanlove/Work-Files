var n=document.getElementById('in');
function get(){
    document.getElementById('res').innerHTML
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

}