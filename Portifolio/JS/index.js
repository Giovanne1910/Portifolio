let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo")
let ftr = document.getElementById("ftr")

btn.onclick = function() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnIcon.src = "images/sun.png";
    btnText.innerHTML = "Light";
    logo.src = "images/code-tag.png"
  }else{
    btnIcon.src = "images/moon.png";
    logo.src = "images/code-tag.png"
    btnText.innerHTML = "Dark"; 
  }
}