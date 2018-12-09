// shrinking navgation function


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    var anchorFont = document.querySelectorAll(".move");
    
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("primary_nav_wrap").style.height = "100px";
    document.getElementById("mylogo").style.width = "75px";
      
    document.querySelector("#primary_nav_wrap ul").style.marginTop = "5px";
      
    document.querySelector("#myname").style.fontSize = "25px";
      
    document.querySelector("#myname").style.marginTop = "45px";
    
    document.querySelector("#primary_nav_wrap ul ul").style.width = "75px";
      

    
      
      for( i in anchorFont ) {
        anchorFont[i].style.fontSize = "12px";
      }
      
    } else {
        
    document.getElementById("primary_nav_wrap").style.height = "150px";
    document.getElementById("mylogo").style.width = "125px";
    document.querySelector("#primary_nav_wrap ul").style.marginTop = "37px";
    document.querySelector("#myname").style.fontSize = "35px";
    document.querySelector("#myname").style.marginTop = "70px";
    document.querySelector("#primary_nav_wrap ul ul").style.width = "100px";
    
        for( i in anchorFont ) {
        anchorFont[i].style.fontSize = "20px";
      }
      
     
  }
}






// comparison slider function for webdev page
function initComparisons() {
    var x;
    var i;
    
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }
    
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        
        w = img.offsetWidth;
        h = img.offsetHeight;
        
        img.style.width = (w/2) + "px";
        
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        
        img.parentElement.insertBefore(slider, img);
        
        slider.style.top = (h/2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w/2) - (slider.offsetWidth / 2) + "px";
        
        slider.addEventListener("mousedown", slideReady);
        
        window.addEventListener("mouseup", slideFinish);
        
        slider.addEventListener("touchstart", slideReady);
        
        window.addEventListener("touchup", slideFinish);
        function slideReady(e) {
            
            e.preventDefault();
            
            clicked = 1;
            
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
            
            
        }
        
        function slideFinish() {
            
            clicked = 0;
        }
        
        function slideMove(e) {
            var pos;
            
            if (clicked == 0) return false;
            
            pos = getCursorPos(e)
            
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            
            slide(pos);
        }
        
        function getCursorPos(e) {
            
            var a, x = 0;
            e = e || window.Event;
            
            a = img.getBoundingClientRect();
            
            x = e.pageX - a.left;
            
            x = x - window.pageXOffset;
            return x;
        }
        
        function slide(x) {
            
            img.style.width = x + "px";
            
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
    
    
   
}

 

initComparisons();