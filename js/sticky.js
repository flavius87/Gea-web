window.onscroll = function() {stickyFunction()};

var main__nav = document.getElementById("myNav");

var sticky = main__nav.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    main__nav.classList.add("sticky");
  } else {
    main__nav.classList.remove("sticky");
  }
}