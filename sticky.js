window.onscroll = function() {stickyNav()};

let navbar = document.getElementById("topNav");

let sticky = navbar.offsetTop;

function stickyNav(){
    if (window.scrollY>= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}