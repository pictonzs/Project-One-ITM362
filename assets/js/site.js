// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("name").addEventListener("click", myFunction);
document.getElementById("email").addEventListener("click", myFunction2);
document.getElementById("phone").addEventListener("click", myFunction3);
function myFunction() {
  if (document.getElementById("name").className == "inactive") {
    document.getElementById("name").className ="active";
  }
  else {
    document.getElementById("name").className ="inactive";
  }
}
function myFunction2() {
  if (document.getElementById("email").className == "inactive") {
    document.getElementById("email").className ="active";
  }
  else {
    document.getElementById("email").className ="inactive";
  }
}
function myFunction3() {
  if (document.getElementById("phone").className == "inactive") {
    document.getElementById("phone").className ="active";
  }
  else {
    document.getElementById("phone").className ="inactive";
  }
}
