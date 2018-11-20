/*(function(){
    
    
    var parallax = document.querySelectorAll(".white", ".image", ".image2"), speed = 0.5;
    
    window.onscroll = function(){
        
        [].slice.call(parallax).forEach(function(el,i)){
                                        
            var windowYOffset = window.pageYOffset, elBackgroundPos = "50% " + (windowYOffset * speed) + "px";
        
        el.style.backgroundPosition = elBackgroundPos;
    });
                                        }
    };
})(); */

//(function(){
//
//  var parallax = document.querySelectorAll(".white", ".image", ".image2"),
//      speed = 0.2;
//
//  window.onscroll = function(){
//    [].slice.call(parallax).forEach(function(el,i){
//
//      var windowYOffset = window.pageYOffset,
//          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
//
//      el.style.backgroundPosition = elBackgrounPos;
//
//    });
//  };
//
//})();


$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.white', '.image', '.image2').css('top',-(scrolled*0.15)+'px');
}
