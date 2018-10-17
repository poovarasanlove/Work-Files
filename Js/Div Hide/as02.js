function hide() {
    document.getElementById('s1').style.visibility='hidden';
    document.getElementById('s2').style.visibility='hidden';
    document.getElementById('s3').style.visibility='hidden';
    document.getElementById('s4').style.visibility='hidden';
    document.getElementById('s5').style.visibility='hidden';
    setTimeout(function(){
        document.getElementById('s1').style.visibility='visible';
        document.getElementById('s2').style.visibility='visible';
        document.getElementById('s3').style.visibility='visible';
        document.getElementById('s4').style.visibility='visible';
        document.getElementById('s5').style.visibility='visible';
    },2000)
}
