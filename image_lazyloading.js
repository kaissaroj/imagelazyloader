(function () {
  function isVisible(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }
  function showVisible() {
    for (var img of document.querySelectorAll("img")) {
      var realSrc = img.dataset.src;
      if (!realSrc) continue;
      if (isVisible(img)) {
        //realSrc += '?nocache=' + Math.random();
        //if we want to remove cache
        img.src = realSrc;
        img.dataset.src = "";
      }
    }
    if (
      Array.from(document.querySelectorAll("[data-src]")).every(function (img) {
        return img.getAttribute("data-src") === "";
      })
    )
      window.removeEventListener("scroll", showVisible);
  }
  window.addEventListener("scroll", showVisible);
  showVisible();
})();
