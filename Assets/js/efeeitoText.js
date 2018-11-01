function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  var toleranceY = 150;
  return (
    rect.top >= 0 - toleranceY &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) + toleranceY &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

var allElements = document.querySelector(".l-container").querySelectorAll("h1, h2, h3, h4, h5, h6, p");
var tl = new TimelineLite();

function debounce(func, delay) {
  delay = delay || 200;
  var t;
  var newFunc = function() {
    if (t) {
      clearTimeout(t);
    }
    
    t = setTimeout(func, delay);
  };
  return newFunc;
}

var arrGlobal = [];
var dFunc = debounce(function() {
  var arrLocal = arrGlobal.slice();
  tl.staggerTo(
    arrLocal,
    0.4,
    {
      opacity: 1,
      y: 0
    },
    0.1
  );
  arrGlobal = [];
}, 100);

function scrollController() {
  Array.prototype.forEach.call(allElements, function(elem) {
    if (isInViewport(elem)) {
      if (elem && elem !== "" && !elem.isPlayed) {
        arrGlobal.push(elem);
        elem.isPlayed = true;
      }
    }
  });
  
  dFunc();
}

window.addEventListener("scroll", scrollController);
scrollController();