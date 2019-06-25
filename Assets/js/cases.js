(function() { 
function toggleCases() {
  var caseItem = [].slice.call(document.querySelectorAll('.case-item'));
  var spanDescription = [].slice.call(document.querySelectorAll('.span-caseDescription'));
  var caseDescription = [].slice.call(document.querySelectorAll('.case-description'));
  var moreCase = [].slice.call(document.querySelectorAll('.more-case'));
  var moreSeta = [].slice.call(document.querySelectorAll('more-case-seta'));
  var caseContainer = document.querySelector('.case-container');


  caseItem.map((caseItem, caseIndex) => {
    caseItem.addEventListener('click', () => {

      var caseSelected = document.querySelector('.case-item--is-selected');

      spanDescription.map((description, indexDescription) => {
        description.classList.remove('-show');
        if (caseIndex === indexDescription) {
          description.classList.add('-show');
        }
      })

      caseDescription.map((description, indexDescription) => {
        description.classList.remove('-show');
        if (caseIndex === indexDescription) {
          description.classList.add('-show');
        }
      })

      moreCase.map((description, indexDescription) => {
        description.classList.remove('-show');
        if (caseIndex === indexDescription) {
          description.classList.add('-show');
        }
      })

      moreSeta.map((description, indexDescription) => {
        description.classList.remove('-show');
        if (caseIndex === indexDescription) {
          description.classList.add('-show');
        }
      })

      caseContainer.classList.remove('k360');
      caseContainer.classList.remove('robo');
      caseContainer.classList.remove('startupin');
      caseContainer.classList.remove('furnas');
      caseContainer.classList.remove('vainaweb');

      if (caseIndex === 0) {
        caseContainer.classList.add('k360');
      }

      if (caseIndex === 1) {
        caseContainer.classList.add('robo');
      }

      if (caseIndex === 2) {
        caseContainer.classList.add('startupin');
      }

      if (caseIndex === 3) {
        caseContainer.classList.add('furnas');
      }

      if (caseIndex === 4) {
        caseContainer.classList.add('vainaweb');
      }

      caseSelected.classList.remove('case-item--is-selected');
      caseItem.classList.add('case-item--is-selected');

    });
  });
}

toggleCases();
})();