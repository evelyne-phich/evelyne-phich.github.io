// Script to fix the viewport height on mobile
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function toggleSideNav() {
  let sideNav = document.getElementById("sideNav");
  sideNav.classList.add("isOpen");
}
