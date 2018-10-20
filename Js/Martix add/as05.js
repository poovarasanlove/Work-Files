
    var ds1=document.getElementById('dis1');
    var ds2=document.getElementById('dis2');
    var ds3=document.getElementById('dis3');
    var ds4=document.getElementById('dis4');
    var ds5=document.getElementById('dis5');
    var ds6=document.getElementById('dis6');
    var ds7=document.getElementById('dis7');
    var ds8=document.getElementById('dis8');
    var ds9=document.getElementById('dis9');


function ad(){
    var a1=+document.getElementById('ia1').value;
    var a2=+document.getElementById('ia2').value;
    var a3=+document.getElementById('ia3').value;
    var a4=+document.getElementById('ia4').value;
    var a5=+document.getElementById('ia5').value;
    var a6=+document.getElementById('ia6').value;
    var a7=+document.getElementById('ia7').value;
    var a8=+document.getElementById('ia8').value;
    var a9=+document.getElementById('ia9').value;

    var b1=+document.getElementById('ib1').value;
    var b2=+document.getElementById('ib2').value;
    var b3=+document.getElementById('ib3').value;
    var b4=+document.getElementById('ib4').value;
    var b5=+document.getElementById('ib5').value;
    var b6=+document.getElementById('ib6').value;
    var b7=+document.getElementById('ib7').value;
    var b8=+document.getElementById('ib8').value;
    var b9=+document.getElementById('ib9').value;
    
    ds1.innerHTML= a1+b1;
    ds2.innerHTML=a2+b2;
    ds3.innerHTML=a3+b3;
    ds4.innerHTML=a4+b4;
    ds5.innerHTML=a5+b5;
    ds6.innerHTML=a6+b6;
    ds7.innerHTML=a7+b7;
    ds8.innerHTML=a8+b8;
    ds9.innerHTML=a9+b9;

}
function cl(){
    document.getElementById('ia1').value="";
    document.getElementById('ia2').value="";
    document.getElementById('ia3').value="";
    document.getElementById('ia4').value="";
    document.getElementById('ia5').value="";
    document.getElementById('ia6').value="";
    document.getElementById('ia7').value="";
    document.getElementById('ia8').value="";
    document.getElementById('ia9').value="";
    document.getElementById('ib1').value="";
    document.getElementById('ib2').value="";
    document.getElementById('ib3').value="";
    document.getElementById('ib4').value="";
    document.getElementById('ib5').value="";
    document.getElementById('ib6').value="";
    document.getElementById('ib7').value="";
    document.getElementById('ib8').value="";
    document.getElementById('ib9').value="";
    ds1.innerHTML="";
    ds2.innerHTML="";
    ds3.innerHTML="";
    ds4.innerHTML="";
    ds5.innerHTML="";
    ds6.innerHTML="";
    ds7.innerHTML="";
    ds8.innerHTML="";
    ds9.innerHTML="";

}