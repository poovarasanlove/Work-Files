function com() {
    var a= +document.getElementById("a1").value;
    var b= +document.getElementById("b1").value;
    var c= +document.getElementById("c1").value;
  
  
    if(a==b && c==b ){
    document.getElementById("dis").innerHTML=" all are equal"
}
else if(a<b && b==c){
    document.getElementById("dis").innerHTML=" a is lesser than b and c, b and c are equal"

}
else if(a>b && b==c){
    document.getElementById("dis").innerHTML=" a is greater than b and c, b and c are equal"

}
else if(a==b && b>c){
    document.getElementById("dis").innerHTML=" a and b are equal, c is lesser than a and b"

}
else if(a==b && b<c){
    document.getElementById("dis").innerHTML=" a and b are equal, c is greater than a and b"

}
else if(a==c && b<c ){
    document.getElementById("dis").innerHTML=" a and c are equal, b is lesser than a and c"

}
else if(a==c && b>c){
    document.getElementById("dis").innerHTML=" a and c are equal, b is greater than a and c"

}
 else if( a<b && b<c && a<c )
 {
    document.getElementById("dis").innerHTML=" a is lesser than b and c , b is greater than a and lesser than c , c is greater than a and b "

 }
 else if( a<b && b>c && a<c )
 {
    document.getElementById("dis").innerHTML=" a is lesser than b and c , b is greater than a and  c , c is greater than a and lesser than b "

 }
 else if( a<b && b>c && a>c )
 {
    document.getElementById("dis").innerHTML=" a is lesser than b and greater than c , b is greater than a and c , c is lesser  than a and  b "

 }
 else if( a>b && b<c && a<c )
 {
    document.getElementById("dis").innerHTML=" a is greater  than b and lesser than c , b is lesser than a and c , c is greater than a and b "

 }
 else if( a>b && b<c && a>c )
 {
    document.getElementById("dis").innerHTML=" a is greater than b and c , b is lesser than a and  c , c is greater than b and lesser than a "

 }
 else if( a>b && b>c && a>c )
 {
    document.getElementById("dis").innerHTML=" a is greater than b and c , b is lesser than a and greater than c , c is lesser than a and b "

 }
}