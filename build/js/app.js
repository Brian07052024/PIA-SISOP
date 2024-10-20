addEventListener("DOMContentLoaded", function(){
    eventsListeners();
})

function eventsListeners(){
    darkMode();
    menuHamburguesa();
    goTop();
}

function darkMode(){
    const toggle = document.querySelector(".toggleMode");
    const body = document.querySelector("body");

    toggle.addEventListener("click", function(){
        body.classList.toggle("darkMode")
    })
}

function menuHamburguesa(){
    const menu = document.querySelector(".menu");
    const enlaces = document.querySelector(".enlaces");

    menu.addEventListener("click", function(){
        // console.log("diste click");
        
        if(enlaces.classList.contains("mostrar")){
            enlaces.classList.remove("mostrar")
            
        }else{
            enlaces.classList.add("mostrar")
            
        }
    
        
    })
}

function goTop() {
    const header = document.querySelector(".header");
    const upBtn = document.querySelector(".up-btn");

    window.addEventListener("scroll", function(){
        
        if(window.innerWidth >= 768){
            if(header.getBoundingClientRect().bottom < 0){
                upBtn.classList.remove("ocultarBtn");
            }else{
                upBtn.classList.add("ocultarBtn");
            }  
        }else{
             upBtn.classList.add("ocultarBtn");
        }
    })
    

    
}

