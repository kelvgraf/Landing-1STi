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
  // // document.getElementById("menu-item6").addEventListener("click", myFunction2);
  // document.getElementById("menu-item7").addEventListener("click", myFunction2);

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
    var showEco = document.querySelectorAll('.home-content-eco');
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
    var caseAlts = [].slice.call(document.querySelectorAll('.case-alt'));


    caseItem.map((caseItem, index) => {
      caseItem.addEventListener('click', () => {

        var caseClicked = document.querySelector('.case-item--is-selected');
        var caseAltShowing = document.querySelector('.case-alt--is-showing');

        caseClicked.classList.remove('case-item--is-selected');
        caseItem.classList.add('case-item--is-selected');

        caseAltShowing.classList.remove('case-alt--is-showing');
        caseAlts[index].classList.add('case-alt--is-showing');
      });
    });
  }

  
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
 
function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  target.forEach( function(element) {
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
  }
  // window.addEventListener('scroll', function(){
  //   let section1, section2, section3, animate;
  //   let section1Ofset, section2Ofset, section3Ofset;
    
  //   section1 = document.getElementById('approach-box1');
    
  //   section2 = document.getElementById('approach-box2');
    
  //   section3 = document.getElementById('approach-box3');

  //   section1Offset = (section1.parentNode.parentNode.parentNode.offsetTop + section1.offsetTop);
  //   section2Offset = (section2.parentNode.parentNode.parentNode.offsetTop + section2.offsetTop);
  //   section3Offset = (section3.parentNode.parentNode.parentNode.offsetTop + section3.offsetTop);
    
    
  //   if ((window.scrollY + 100) < section1Offset) {
  //     animate = document.querySelector('.approach-box-animate');
  //     if (animate) {
  //       animate.classList.remove('approach-box-animate');
  //     }
  //   }
        
  //   if ((window.scrollY + 100) >= section1Offset
  //      && (window.scrollY + 100) <= section2Offset) {
  //     animate = document.querySelector('.approach-box-animate');
  //     if (animate) {
  //       animate.classList.remove('approach-box-animate');
  //     }
  //     section1.querySelector('.approach-box-span div').classList.add('approach-box-animate');
  //   }
    
  //   if ((window.scrollY + 100) >= section2Offset
  //      && (window.scrollY + 100) <= section3Offset) {
  //     animate = document.querySelector('.approach-box-animate');
  //     if (animate) {
  //       animate.classList.remove('approach-box-animate');
  //     }
  //     section2.querySelector('.approach-box-span div').classList.add('approach-box-animate');
  //   }
    
  //   if ((window.scrollY + 100)  >= section3Offset){
  //     animate = document.querySelector('.approach-box-animate');
  //     if (animate) {
  //       animate.classList.remove('approach-box-animate');
  //     }
  //     section3.querySelector('.approach-box-span div').classList.add('approach-box-animate');
  //   }
  // });


  toggleServices();
  animateTitles();
  showHome();
  toggleCases();
})();