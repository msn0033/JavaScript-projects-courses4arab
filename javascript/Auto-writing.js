

let i=1;
const t=()=>
    {
        let title="Courses4Arab";   
        document.getElementById('titleheader').innerHTML=title.slice(0,i);
        title.length < i ? i=1 : i++;
    };
    setInterval(t,500);
