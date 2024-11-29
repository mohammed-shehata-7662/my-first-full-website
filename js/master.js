
//settings spin
document.querySelector(".con").onclick=function(){
    document.querySelector(".option").classList.toggle('open');
    document.querySelector(".set ").classList.toggle("fa-spin");
}

let randimage=true;
let makeint;
let backlocal=localStorage.getItem("background");
if(backlocal!==null){
    
    if(backlocal==="yes"){
        randimage=true;
    }
    else{
        randimage=false;
    }
    document.querySelectorAll(".randomback span").forEach(el=>{
        el.classList.remove("active");
    });
    if(backlocal=="yes"){
        document.querySelector(".randomback .yes").classList.add("active");
    }
    else{
        document.querySelector(".randomback .no").classList.add("active");
    }

}
//photo landing
function makerand(){
    if(randimage===true){
        makeint=setInterval(function(){
        let pag=document.querySelector(".landing")
        let num=Math.floor(Math.random()*5);
        console.log(num);
        pag.style.background=`url(../images/${num}.jpg)`;
        pag.style.setProperty("background-color",'cover');
        },10000);
    }
}
makerand();

let col=localStorage.getItem("web_color");
if(col!==null){
    document.documentElement.style.setProperty("--man_color",col);
    document.querySelectorAll(".colors li").forEach((el)=>{
        el.classList.remove("active");
        if(col==el.dataset.color){
            el.classList.add("active");
        }
    });
}
//main color
let li=document.querySelectorAll(".colors li");
li.forEach((lis)=>{
    lis.addEventListener("click",(el)=>{
        let x=el.target.dataset.color;
        document.documentElement.style.setProperty("--man_color",x);
        localStorage.setItem("web_color",x);

        el.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.toggle("active");
        });

        el.target.classList.add("active");
    });
});

//class active to the option
let rndimage=document.querySelectorAll(".randomback span");
rndimage.forEach(ch=>{
    ch.addEventListener("click",(el)=>{


        el.target.parentElement.querySelectorAll(".active").forEach((act)=>{
            act.classList.remove("active");
        });
        el.target.classList.add("active");
        if(el.target.dataset.background==="yes"){
            randimage=true;
            makerand();
            localStorage.setItem("background","yes");
        }
        else {
            randimage=false;
            clearInterval(makeint);
            localStorage.setItem("background","no");
        }
    });
});

//start skills
let ourskil = document.querySelector(".skills");

window.onscroll = function() {
    let y = this.pageYOffset;
    let disp = this.innerHeight;
    let ofset = ourskil.offsetTop;
    let cur = ourskil.offsetHeight;

    if (y > (ofset + cur - disp) ) {
        console.log("we are here");
        let skill = document.querySelectorAll(".skill-pro span");
        skill.forEach(el => {
            el.style.width = el.dataset.progress;
        });
    }
}
//start popup box
let imt=document.querySelectorAll(".gallery img");
imt.forEach((el)=>{

    el.addEventListener('click',(e)=>{
        let overlay=document.createElement("div");
        overlay.className='overlay';
        document.body.appendChild(overlay);

        let phots=document.createElement("div");
        phots.className='photo2';

        let clic=document.createElement("span");
        clic.className="the-bt"
        let te=document.createTextNode("X");
        clic.appendChild(te);
        phots.appendChild(clic);

        if(el.alt!==null){
            let  h2=document.createElement("h3");
            h2.className="quat";
            let text=document.createTextNode(el.alt);
            h2.appendChild(text);
            phots.appendChild(h2);
        }
        let imgs=document.createElement("img");
        imgs.className='fimg';

        imgs.src=el.src;
        phots.appendChild(imgs);
        document.body.appendChild(phots);
        clic.addEventListener("click",(er)=>{
            overlay.remove();
            phots.remove();
            clic.remove();
            imgs.remove();
        });

    });

});

let nav = document.querySelectorAll(".nave .nav-bolt");

nav.forEach(bul => {
    bul.addEventListener("click", (er) => {
        // Get the section corresponding to the clicked nav item
        const targetSection = document.querySelector(er.currentTarget.dataset.name);

        // If the section exists, scroll to it
        if (targetSection) {
            // Get the position of the section (distance from the top of the page)
            const sectionPosition = targetSection.offsetTop;

            // Scroll to that position with smooth behavior
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'  // Smooth scroll
            });
        } else {
            console.error('Section not found:', er.currentTarget.dataset.name);
        }
    });
});

document.querySelector('.reset').onclick=function(){
    localStorage.clear();
    window.location.reload();
}
let xm=document.querySelector(".tuggle-con");
xm.addEventListener('click',(e)=>{
document.querySelector(".links").classList.toggle("open")
});



