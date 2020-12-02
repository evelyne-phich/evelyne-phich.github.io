// Masquer tous les restaurants non className
function hideRestaurantsNot(className) {

// Masquer tous les restaurants
var restaurants = document.getElementsByClassName("restaurant");
var i;
for (i = 0; i <restaurants.length; i++) {
  restaurants[i].classList.add("hidden");
  restaurants[i].classList.remove("show");
}

// Afficher les restaurants className
var restaurantsSelectionnes = document.getElementsByClassName(className);
var i;
for (i = 0; i <restaurantsSelectionnes.length; i++) {
  restaurantsSelectionnes[i].classList.add("show");
}
}

//Get the button scrollToTop
var scrollToTopButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button

function scrollToTopButtonDisplay() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  scrollToTopButton.style.bottom = "10px";
} else {
  scrollToTopButton.style.bottom = "-50px";
}
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
}

var navBarPlaceHolder = document.getElementById("navBarPlaceHolder");
var sticky = navBarPlaceHolder.offsetTop;
var navBar = document.getElementById("navBar");

function stickNavbarToTop() {
if (window.pageYOffset >= sticky) {
  navBar.classList.add("sticky")
} else {
  navBar.classList.remove("sticky");
}
}

window.onscroll = function() {
scrollToTopButtonDisplay();
stickNavbarToTop();
}

function showAllRestaurants() {

var allRestaurants = document.getElementsByClassName("restaurant");
var i;
for (i = 0; i <allRestaurants.length; i++) {
  allRestaurants[i].classList.add("show");
}
// hideMenuDropdown(id);
}

function hideMenuDropdown(id) {
// Cache le navigation item dans le dropdown quand on clique sur l'id
var menuDropdown = document.getElementById(id);

menuDropdown.style.display = "none";
}

function showMenuDropdown(id) {
// Affiche le menu dropwdown quand on clique sur le dropdown toggler
var menuDropdown = document.getElementById(id);

menuDropdown.style.display = "block";
}

function hideRestaurantsNotAndHideNavigationItem(className,id) {
hideRestaurantsNot(className);
hideMenuDropdown(id);
}