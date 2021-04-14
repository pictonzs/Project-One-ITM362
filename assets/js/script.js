// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("email").addEventListener("click", myFunction);

function myFunction() {
  if (document.getElementById("email").className == "inactive") {
    document.getElementById("email").className ="active";
  }
  else {
    document.getElementById("email").className ="inactive";
  }
}
