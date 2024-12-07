
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
})
changecolor.addEventListener("mouseout",async (eo) => {
  hiddenul.style.display="none";
})
}


//when click change bg header
{
  headerbg.addEventListener('click', (eo) => {
    let random=Math.round(Math.random()*360);
    console.log(random);
    const myheader=document.querySelector('.myheader');
    myheader.style.backgroundColor=`hsl(${random}, 100%, 50%)`;
    document.querySelector('#dark').style.backgroundColor=`hsl(${Math.round(Math.random()*100)}, 100%, 50%)`;
    
    
  })
}

//when click change bg All section
{const arrcolor=["red","blue","green"];
let i=0;
sectionbg.addEventListener('click', (params) => {

const Allsection=document.querySelectorAll('section');
Allsection.forEach( (item) => {
  item.style.backgroundColor=arrcolor[i]; 
});
i<arrcolor.length-1 ? i++ : i=0;  
console.log(i);

})}

