const nav=document.querySelector(".nav"), menu=document.querySelector(".menu");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const el=document.querySelector(a.getAttribute("href")); if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});}
}));
