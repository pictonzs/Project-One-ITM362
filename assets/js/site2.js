// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("phone").addEventListener("click", myFunction);

function myFunction() {
  if (document.getElementById("phone").className == "inactive") {
    document.getElementById("phone").className ="active";
  }
  else {
    document.getElementById("phone").className ="inactive";
  }
}
