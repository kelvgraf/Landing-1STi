  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  
  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
  document.getElementById("menu-item5").addEventListener("click", myFunction2);
 
  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
  };
