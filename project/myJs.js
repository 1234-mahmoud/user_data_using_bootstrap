//add local storage globally
let x = document.getElementById("mysidebar");
if (localStorage.getItem("isSmall") === "yes") {
  x.classList.add("toggle_sidebar");
} else {
  x.classList.remove("toggle_sidebar");
}

//--------------add local storage for the button only-----------
//if you don't add local storage again to the button it 
//will execute the global local storage and you can't reset the original size of sidebar
const toggleSidebar = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    //to reset the size of sidebar
    localStorage.setItem("isSmall", "no");
    x.classList.remove("toggle_sidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    x.classList.add("toggle_sidebar");
  }
  
};
