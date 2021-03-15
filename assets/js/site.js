// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("inputColor").addEventListener("click", myFunction);
function myFunction() {
  if (document.getElementById("inputColor").className == "inactive") {
    document.getElementById("inputColor").className ="active";
  }
  else {
    document.getElementById("inputColor").className ="inactive";
  }
}
