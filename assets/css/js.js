/*===== NAVBAR =====*/

let prevScrollpos = window.pageYOffset;
const myNav = document.getElementById("header");
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        myNav.style.top = "0";

    } else {
        myNav.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}