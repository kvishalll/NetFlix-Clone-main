import navbar from "/vishu_components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {footer} from "/vishu_components/footer.js"

document.querySelector("#footer").innerHTML=footer();

document.querySelector("#right_menu").innerText="Sign Out"

// document.querySelector("#next").addEventListener("click",()=>{
//     window.location.href="./password_creation.html"
// })


document.querySelector("#right_menu").addEventListener("click",()=>{
    event.preventDefault();
    window.location.href="/Signout/signout.html";
})