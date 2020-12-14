// sidebar collapse

function openNav() {

  document.getElementByClass("nav-body").style.width = "237px";

  document.getElementByClass("bd-cards-container").style.marginLeft = "237px";
}

function closeNav() {
  document.getElementByClass("nav-body").style.width = "0";

  document.getElementByClass("main").style.marginLeft = "0";
}