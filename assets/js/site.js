// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("name").addEventListener("click", myFunction);
function myFunction() {
  if (document.getElementById("name").className == "inactive") {
    document.getElementById("name").className ="active";
  }
  else {
    document.getElementById("name").className ="inactive";
  }
}
  }
}
