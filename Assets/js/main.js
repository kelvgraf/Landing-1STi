(function() { 
  let header = document.querySelector(".wrapper-header");
  let isScrolling;
  let section = document.querySelectorAll('section');
  let sections = {};
  let sectionItem = 0;
  let home = document.querySelector(".home");

  window.addEventListener('scroll', function ( event ) {
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
      header.classList.add('fade-in');
    }, 50);

    if(isScrolling) {
      header.classList.remove('fade-in')
    }
  }, false);

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (sectionItem in sections) {
      if ((sections[sectionItem]) - 100 <= scrollPosition) {
        if (sectionItem === 'home') {
          header.classList.add('hidden')
        }
        else {
          header.classList.remove('hidden')
        }
      }
    }
  };


  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  var socialIcon = document.querySelector('.header-social');
  
  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
  document.getElementById("menu-item5").addEventListener("click", myFunction2);
  // document.getElementById("menu-item6").addEventListener("click", myFunction2);
  // document.getElementById("menu-item7").addEventListener("click", myFunction2);


 
  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
  };


  function animateTitles() {
    let counter = 0;
    const specialChars = ['$','%','#','@','&','(',')','=','*','/'];
    const totalSpecialChars = specialChars.length;
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const work = document.querySelector('.container-title-work');
    const approach = document.querySelector('.container-title-approach');
    const cases = document.querySelector('.container-title-case');
    const time = document.querySelector('.container-title-time');
    const contact = document.querySelector('.container-title-contact');

    generateLetters(work)
    generateLetters(approach)
    generateLetters(cases)
    generateLetters(time)
    generateLetters(contact)

    const workLetters = document.querySelectorAll('.container-title-work .title__letter');
    const approachLetters = document.querySelectorAll('.container-title-approach .title__letter');
    const casesLetters = document.querySelectorAll('.container-title-case .title__letter');
    const timeLetters = document.querySelectorAll('.container-title-time .title__letter');
    const contactLetters = document.querySelectorAll('.container-title-contact .title__letter');
    
    function generateLetters (element) {
      return element.innerHTML = element.innerHTML.split('').map(string => {
        return `<span class="title__letter" data-letter="${string}">${string}</span>`
      }).join('')
    }

    function writeLetters(letters) {
      letters.forEach((letter, index) => {
        let timeout = setTimeout(() => {
          if (letter.innerHTML === ' ') {
            letter.innerHTML = ' '
          } else {
            letter.innerHTML = specialChars[getRandom(0, totalSpecialChars - 1)]
          }
          
          setTimeout(() => {
            letter.innerHTML = letter.getAttribute('data-letter');
          }, 100)
        }, index * 250)
      });
    }

    function loopLetters(letters, ms) {
      setInterval(() => {
        writeLetters(letters)
      }, ms)
    }

    writeLetters(workLetters)
    writeLetters(approachLetters)
    writeLetters(casesLetters)
    writeLetters(timeLetters)
    writeLetters(contactLetters)

    loopLetters(workLetters, 5000)
    loopLetters(approachLetters, 5000)
    loopLetters(casesLetters, 4000)
    loopLetters(timeLetters, 4000)
    loopLetters(contactLetters, 5000)
    
  }

  function toggleServices() {
    var buttons = [].slice.call(document.querySelectorAll('.work-topic'));
    var services = [].slice.call(document.querySelectorAll('.work-alt'));
    buttons.map(function(button, index) {
      button.addEventListener('click', function() {

        var buttonSelected = document.querySelector('.work-topic--is-selected');
        var serviceShowing = document.querySelector('.work-alt--is-showing');

        console.log("serviceShowing", serviceShowing);

        buttonSelected.classList.remove('work-topic--is-selected');
        button.classList.add('work-topic--is-selected');

        serviceShowing.classList.remove('work-alt--is-showing');
        services[index].classList.add('work-alt--is-showing');
      });
    });
  }

  function showHome() {
    var showEco = document.querySelector('.home-content-eco');
    for(var x=0; x<showEco.length; x++){
      showEco[x].onmouseenter = function(){
        this.querySelector('isShow').style.display = 'inline-block';
      }
      showEco[x].onmouseleave = function(){
      this.querySelector('isShow').style.display = 'none'; 
      }
    }
  }

  function toggleCases() {
    var caseItem = [].slice.call(document.querySelectorAll('.case-item'));
    var spanDescription = [].slice.call(document.querySelectorAll('.span-caseDescription'));
    var caseDescription = [].slice.call(document.querySelectorAll('.case-description'));
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

function animeScroll() {
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

  animeScroll();

  window.addEventListener('scroll', function() {
    animeScroll();
  }) 




  toggleServices();
  animateTitles();
  showHome();
  toggleCases();
})();