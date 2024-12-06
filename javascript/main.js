
//toggle the light & Dark
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});}

// const changecolor=document.getElementById("changecolor");
// const hiddenul=document.getElementById('hiddenul');


//When hover on Header =>change-color
{changecolor.addEventListener("mouseover",async (eo) => {
  hiddenul.style.display="block";
  console.log(eo);
  
})

changecolor.addEventListener("mouseout",async (eo) => {
  hiddenul.style.display="none";
  console.log(ChangeColor.textContent);
  
})
}

