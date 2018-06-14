var headerFixeContainer = document.querySelector('.first');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerFixeContainer.style.marginTop = "-140px";
  } else if (event.deltaY < 0) {
    headerFixeContainer.style.marginTop = "";
  }
});
