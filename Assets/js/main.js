(function() {
  let header = document.querySelector(".header-container");
  let isScrolling;
  let section = document.querySelectorAll('section');
  let sections = {};
  let sectionItem = 0;
  let home = document.querySelector(".home");

  window.addEventListener('scroll', function ( event ) {
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
      header.classList.add('fade-in');
    }, 66);

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

  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  var socialIcon = document.querySelector('.header-social');
  
  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
  document.getElementById("menu-item5").addEventListener("click", myFunction2);
  document.getElementById("menu-item6").addEventListener("click", myFunction2);
  document.getElementById("menu-item7").addEventListener("click", myFunction2);

  const home = document.getElementsByClassName("home-content")
 
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
  }
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

  animateTitles();
})();
