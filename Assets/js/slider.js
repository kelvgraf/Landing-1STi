
var changeDesk;
var elementDesk = document.querySelectorAll(".caseSlider");

const codCase = function(){
  if (window.innerWidth > '768') {
    var i;
    for(i = 0;i < elementDesk.length;i++){
      elementDesk[i].classList.add("sliderCases")
    }

    var slideProjetosDesk = 1;
    showCasesDesk(slideCasesDesk);

    changeDesk = function plusCasesDesk(n){
      showCasesDesk(slideProjetosDesk += n);
    }

    function showCasesDesk(n){
      var i;
      var x = document.getElementsByClassName("sliderCases");
      if (n > x.length) {slideCasesDesk = 1}
      if (n < 1 ) {slideCasesDesk = x.length};
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideCasesDesk-1].style.display = "flex"
    };
  }else if (window.innerWidth <= '768') {
    var i;
    for(i = 0;i < elementDesk.length;i++){
      elementDesk[i].classList.remove("sliderCases");
      elementDesk[i].style.display = "none"
    }
  }
};