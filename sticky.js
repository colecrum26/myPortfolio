window.onscroll = () => {stickyNav()};

let navbar = document.getElementById("topNav");

let sticky = navbar.offsetTop;

function stickyNav(){
    if (window.scrollY>= sticky){
        navbar.classList.add("sticky")
        document.querySelector(".sticky").style.justifyContent = "space-around";
    } else {
        navbar.classList.remove("sticky");
    }
}