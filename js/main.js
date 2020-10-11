// function openHeaderMenyu() {
//   document.getElementById("headerMenyu").style.width = "255px";
// }

// function closeHeaderMenyu() {
//   document.getElementById("headerMenyu").style.width = "0";
// }

const hamburger = document.querySelector(".sitenav__toggler");
const navmenu = document.querySelector(".sitenav__link-wrapper");


hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("sitenav__link-wrapper--open");
})