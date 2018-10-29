function log() {

  var name = document.getElementById("in");
  var pass = document.getElementById("ip");
  if (name.value == "poovarasanlove" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('poovarasan.html', "_self");
    }, 4000)
  }
  else if (name.value == "sandy" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('santhosh.html', "_self");
    }, 4000)
  }
  else if (name.value == "sakthi" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('sakthi.html', "_self");
    }, 4000)
  }
  else if (name.value == "yoga" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('yogarajan.html', "_self");
    }, 4000)
  }
  else if (name.value == "sabari" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('sabari.html', "_self");
    }, 4000)
  }
  else if (name.value == "thiyagu" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('thiyagu.html', "_self");
    }, 4000)
  }
  else if (name.value == "thiru" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('thirumurugan.html', "_self");
    }, 4000)
  }
  else if (name.value == "christo" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('christopher.html', "_self");
    }, 4000)
  }
  else if (name.value == "thiruAK" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('thirunavukarasu.html', "_self");
    }, 4000)
  }
  else if (name.value == "prem" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('prem.html', "_self");
    }, 4000)
  }
  else if (name.value == "barani" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('barani.html', "_self");
    }, 4000)
  }
  else if (name.value == "enba" && pass.value == "makeit") {
    lol();
    window.setTimeout(function () {
      window.open('enba.html', "_self");
    }, 4000)
  }
 
  else { alert('invalid username and password'); }
}





function lol() {
  var t = document.getElementById('d3');
  var p = 0;
  var id = setInterval(frame, 5);
  function frame() {

    if (p == 250) {
      clearInterval(id);
    } else {
      p++;
      t.style.top = p + 'px';
      t.style.left = p + 'px';
    }
  }
  $("#d6").delay(1350).fadeIn('slow');
  $("#d5").delay(1450).fadeTo('slow', 0.25);
}

window.onscroll = function () {
  var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPosition >= 75) {
    document.getElementById('d1').style.backgroundColor = '#2C3E50';
    document.getElementById('d1').style.height = "100px";
    document.getElementById('dt').style.fontSize = "100px";
    document.getElementById('dt').style.marginTop = "-20px";
    document.getElementById('dt').style.marginLeft = "55rem";
    document.getElementById('di').style.height = "100px";
    document.getElementById('di').style.width = "100px";
    document.getElementById('di').style.marginTop = "-33px";
    document.getElementById('di').style.marginLeft = "30px";
    document.getElementById('dn').style.display = "block";
    document.getElementById('tp').style.display = "block";




  } else {
    document.getElementById('d1').style.backgroundColor = 'transparent';
    document.getElementById('di').style.height = "20rem";
    document.getElementById('di').style.width = "20rem";
    document.getElementById('dt').style.marginLeft = "20rem";
    document.getElementById('dt').style.marginTop = "5rem";
    document.getElementById('dt').style.fontSize = "10rem";
    document.getElementById('di').style.marginTop = "0px";
    document.getElementById('di').style.marginLeft = "112px";
    document.getElementById('dn').style.display = "none";
    document.getElementById('tp').style.display = "none";

  }


  if (scrollPosition <= 450) {
    document.getElementById('h').classList.add('active');
  } else {
    document.getElementById('h').classList.remove('active');
  }
  if (scrollPosition > 450 && scrollPosition <= 1150) {
    document.getElementById('m').classList.add('active');
  } else {
    document.getElementById('m').classList.remove('active');
  }
  if (scrollPosition > 1150 && scrollPosition <= 1850) {
    document.getElementById('s').classList.add('active');
  } else {
    document.getElementById('s').classList.remove('active');
  }
  if (scrollPosition > 1850) {
    document.getElementById('a').classList.add('active');
  } else {
    document.getElementById('a').classList.remove('active');
  }
};
var ds1 = document.getElementById('dis1s');
var ds2 = document.getElementById('dis2s');
var ds3 = document.getElementById('dis3s');
var ds4 = document.getElementById('dis4s');
var ds5 = document.getElementById('dis5s');
var ds6 = document.getElementById('dis6s');
var ds7 = document.getElementById('dis7s');
var ds8 = document.getElementById('dis8s');
var ds9 = document.getElementById('dis9s');
var ds10 = document.getElementById('dis10s');
var ds11 = document.getElementById('dis11s');
var ds12 = document.getElementById('dis12s');
function poo() {
  if (ds1.style.display == "block") {
    ds1.style.display = "none";
  }
  else {
    ds1.style.display = "block";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function san() {
  if (ds2.style.display == "block") {
    ds2.style.display = "none";
  }
  else {
    ds2.style.display = "block";
    ds1.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function sak() {
  if (ds3.style.display == "block") {
    ds3.style.display = "none";
  }
  else {
    ds3.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function yog() {
  if (ds4.style.display == "block") {
    ds4.style.display = "none";
  }
  else {
    ds4.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function sab() {
  if (ds5.style.display == "block") {
    ds5.style.display = "none";
  }
  else {
    ds5.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function thu() {
  if (ds6.style.display == "block") {
    ds6.style.display = "none";
  }
  else {
    ds6.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function th() {
  if (ds7.style.display == "block") {
    ds7.style.display = "none";
  }
  else {
    ds7.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function chri() {
  if (ds8.style.display == "block") {
    ds8.style.display = "none";
  }
  else {
    ds8.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function thrn() {
  if (ds9.style.display == "block") {
    ds9.style.display = "none";
  }
  else {
    ds9.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function prem() {
  if (ds10.style.display == "block") {
    ds10.style.display = "none";
  }
  else {
    ds10.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds11.style.display = "none";
    ds12.style.display = "none";
  }
}
function barani() {
  if (ds11.style.display == "block") {
    ds11.style.display = "none";
  }
  else {
    ds11.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds12.style.display = "none";
  }
}
function enba() {
  if (ds12.style.display == "block") {
    ds12.style.display = "none";
  }
  else {
    ds12.style.display = "block";
    ds1.style.display = "none";
    ds2.style.display = "none";
    ds3.style.display = "none";
    ds4.style.display = "none";
    ds5.style.display = "none";
    ds6.style.display = "none";
    ds7.style.display = "none";
    ds8.style.display = "none";
    ds9.style.display = "none";
    ds10.style.display = "none";
    ds11.style.display = "none";

  }
}