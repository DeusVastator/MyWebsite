window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("primary_nav_wrap").style.height = "100px";
    document.getElementById("mylogo").style.width = "75px";
      
    document.querySelector("#primary_nav_wrap ul li").style.marginTop = "40px";
    document.querySelector("#nav a").style.fontSize = "15px";
  } else {
    document.getElementById("primary_nav_wrap").style.height = "150px";
    document.getElementById("mylogo").style.width = "125px";
    document.querySelector("#primary_nav_wrap ul li").style.marginTop = "80px";
    document.querySelector("#nav a").style.fontSize = "20px";
  }
}