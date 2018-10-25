function togglework() {
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