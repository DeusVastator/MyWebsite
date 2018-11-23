window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    var anchorFont = document.querySelectorAll(".move");
    
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("primary_nav_wrap").style.height = "100px";
    document.getElementById("mylogo").style.width = "75px";
      
    document.querySelector("#primary_nav_wrap ul").style.marginTop = "5px";
    
      
      for( i in anchorFont ) {
        anchorFont[i].style.fontSize = "12px";
      }
      
    } else {
        
    document.getElementById("primary_nav_wrap").style.height = "150px";
    document.getElementById("mylogo").style.width = "125px";
    document.querySelector("#primary_nav_wrap ul").style.marginTop = "37px";
    
        for( i in anchorFont ) {
        anchorFont[i].style.fontSize = "20px";
      }
      
     
  }
}