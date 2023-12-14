
const div = document.querySelector(".nav-settings-menu");
const body=document.body;
var dark_btn = document.querySelector(".dark-btn");
function settings() {
    // dark_btn.classList.toggle("on");
    // div.classList.toggle("nav-settings-menu-show");
    
}
function darkMode(){
    console.log("clicked");
dark_btn.classList.toggle("on");
body.classList.toggle("dark-theme");
}


// localStorage.setItem("theme","light");
// localStorage.getItem("theme");
// function darkMode() {
//     // alert("hi");    
//     dark_btn.classList.toggle("on");
//     document.body.classList.toggle("dark-theme");


//     if(localStorage.getItem("theme")==light){
//     localStorage.setItem("theme","dark");

//     }
//     else if(localStorage.getItem("theme")==dark){
//         localStorage.setItem("theme","light");
//     }
//     else{
//         localStorage.setItem("theme","light");
    
//     }
// }


// if(localStorage.getItem("theme")==light){
//     dark_btn.classList.remove("on");
//     document.body.classList.remove("dark-theme");
// }
// else if(localStorage.getItem("theme")==dark){
//     dark_btn.classList.add("on");
//     document.body.classList.add("dark-theme");
// }
// else{
//     localStorage.setItem("theme","light");

// }
