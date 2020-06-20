/*setTimeout(function () {
  $('.spinner').fadeToggle();
},1500);*/

var myvar;

function myfunction() {
  myvar = setTimeout(showPage,5000);
}

function showPage() {
  document.getElementById('loader').style.display = "none";
  document.getElementById('myDiv').style.display = "block";
}