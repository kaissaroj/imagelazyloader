
(function(){
function isVisible(elem) {
      var coords = elem.getBoundingClientRect();
      var windowHeight = document.documentElement.clientHeight;
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      return topVisible || bottomVisible;
    }
    function showVisible() {
      for (var img of document.querySelectorAll('img')) {
        var realSrc = img.dataset.src;
        if (!realSrc) continue;
        if (isVisible(img)) {
          //realSrc += '?nocache=' + Math.random(); 
          //if we want to remove cache 
          img.src = realSrc;
          img.dataset.src = '';
        }
      }
     if(Array.from(document.querySelectorAll('[data-src]')).every(function(img){
         return img.getAttribute('data-src') === '';
       }))   window.removeEventListener('scroll', showVisible);
    }
    window.addEventListener('scroll', showVisible);
    showVisible();  
})();

