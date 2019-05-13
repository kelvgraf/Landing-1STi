function toggleServices() {
  var buttons = [].slice.call(document.querySelectorAll('.work-topic'));
  var services = [].slice.call(document.querySelectorAll('.work-results'));
  buttons.map(function(button, index) {
    button.addEventListener('click', function() {
      var buttonSelected = document.querySelector('.work-topic--is-selected');
      var serviceShowing = document.querySelector('.work-results--is-showing');
      buttonSelected.classList.remove('work-topic--is-selected');
      button.classList.add('work-topic--is-selected');
      serviceShowing.classList.remove('work-results--is-showing');
      services[index].classList.add('work-results--is-showing');
    });
  });
}

