//toggle the light & Dark
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

// const changecolor=document.getElementById("changecolor");
// const hiddenul=document.getElementById('hiddenul');

//When hover on change-color =>show ul
{
  changecolor.addEventListener("mouseover", async (eo) => {
    hiddenul.style.display = "block";
  });
  changecolor.addEventListener("mouseout", async (eo) => {
    hiddenul.style.display = "none";
  });
}

//when click headerbg change => "bgcolor header "
{
  headerbg.addEventListener("click", (eo) => {
    let random = Math.round(Math.random() * 360);
    console.log(random);
    const myheader = document.querySelector(".myheader");
    myheader.style.backgroundColor = `hsl(${random}, 100%, 50%)`;
    document.querySelector("#dark").style.backgroundColor = `hsl(${Math.round(
      Math.random() * 100
    )}, 100%, 50%)`;
  });
}

//when click sectionbg change =>"bgcolor All section by array"
{
//   const arrcolor = ["red", "blue", "green"];
//   let i = 0;
//   sectionbg.addEventListener("click", (params) => {
//     const Allsection = document.querySelectorAll("section");
//     Allsection.forEach((item) => {
//       item.style.backgroundColor = arrcolor[i];
//     });
//     i < arrcolor.length - 1 ? i++ : (i = 0);
//     console.log(i);
//   });
}


// click titlebg =>" change bgcolor h1 by function random() - hsl"
{
  const random=()=>{return Math.round(Math.random()*360)};
  titlebg.addEventListener("click", (e) => {    
    const title = document.querySelectorAll("h1:not(#myheader > h1)");
    // console.log(title[0].style.backgroundColor='red');
      title.forEach(item=>{item.style.backgroundColor=`hsl(${random()},100%,50%)`;})
    });
}

// when click titlecolor => "change color title and random array  arr[floor]"
{arrcolor=["red","blue","green"]
titlecolor.addEventListener('click',(params) => {
  const colorh1=document.querySelectorAll('h1:not(#myheader>h1)');
  let r=Math.floor(Math.random()* arrcolor.length)
  colorh1.forEach(item=>
    {item.style.color=arrcolor[r]});
console.log(r);
})}



// when click sectionbg => "change color title and random - rgb"
{

  sectionbg.addEventListener('click', (params) => {
    const random1=Math.round(Math.random()*255);
    const random2=Math.round(Math.random()*255);
    const random3=Math.round(Math.random()*255);
    let allsection=document.querySelectorAll('section');
    allsection.forEach(item=>{
      item.style.backgroundColor=`rgb(${random1},${random2},${random3})`
    });

  })
}

// when click sectionbg => "change color title and random - hex"
{
  // sectionbg.addEventListener('click',(params) => {
  //   let random=Math.random().toString(16).slice(2,8);
  //   let allsection=document.querySelectorAll('section');
  //   allsection.forEach(item=>{item.style.backgroundColor=`#${random}`})
  //   console.log(`#${random}`);
    
  // })
}

