function toggleWork() {
  var buttons = [].slice.call(document.querySelectorAll('.work-topic'));
  var work = [].slice.call(document.querySelectorAll('.work-results'));
  buttons.map(function(button, index) {
    button.addEventListener('click', function() {
      var buttonSelected = document.querySelector('.work-topic--is-selected');
      var workhowing = document.querySelector('.work-results--is-showing');
      buttonSelected.classList.remove('work-topic--is-selected');
      button.classList.add('work-topic--is-selected');
      workShowing.classList.remove('work-results--is-showing');
      work[index].classList.add('work-results--is-showing');
    });
  });
}




var fadein_tween = TweenMax.to('.container-title-work > h2', .375,{ opacity: 1 });
var fadeout_tween = TweenMax.to('.container-title-work > h2', .375,{ opacity: 0 });

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '.container-title-work',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

var fadeout_scene = new ScrollMagic.Scene({
  triggerElement: '.container-title-work',
  reverse: true
})
.setTween(fadeout_tween)
.addTo(controller);
