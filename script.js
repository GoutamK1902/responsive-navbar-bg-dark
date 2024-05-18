// const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const navbarLinks = document.getElementsByClassName("nav-links")[0];
// toggleButton.addEventListener("click", () => {
//   navbarLinks.classList.toggle("active");
//   navbarLinks.classList.add("slide-down");
//   navbarLinks.classList.add("slide-up");
//   if (navbarLinks.classList.contains("active")) {
//     toggleButton.classList.add("rotate-right");
//     navbarLinks.classList.add("slide-down");
//     navbarLinks.classList.remove("slide-up");
//   } else {
//     toggleButton.classList.remove("rotate-right");
//     toggleButton.classList.add("rotate-left");
//     navbarLinks.classList.remove("slide-down");
//     navbarLinks.classList.add("slide-up");
//   }
// });
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  if (navbarLinks.classList.contains("active")) {
    navbarLinks.classList.remove("slide-down");
    navbarLinks.classList.add("slide-up");

    setTimeout(() => {
      navbarLinks.classList.remove("active");
    }, 1000); // Matches the duration of slide-up animation
  } else {
    navbarLinks.classList.remove("slide-up");
    navbarLinks.classList.add("active");
    navbarLinks.classList.add("slide-down");
  }

  toggleButton.classList.toggle("rotate-right");
  toggleButton.classList.toggle("rotate-left");
});
