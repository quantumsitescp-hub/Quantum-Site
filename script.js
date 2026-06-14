function copyIP(){
navigator.clipboard.writeText("192.135.116.161:9120");
alert("IP скопирован!");
}

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
section.classList.add("show");
}

});

});

window.dispatchEvent(new Event("scroll"));