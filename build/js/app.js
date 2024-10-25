addEventListener("DOMContentLoaded", function(){
    eventsListeners();
})

function eventsListeners(){
    menuHamburguesa();
    recognizeStart();
    textAnimation();
    blinkEffect();
    animations();
    darkMode();
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
        console.log("diste click");
        if(enlaces.classList.contains("mostrar")){
            enlaces.classList.remove("mostrar")
            
        }else{
            enlaces.classList.add("mostrar")
            
        }  
    })
}

function recognizeStart(){
    const header = document.querySelector("header");
    if(header.classList.contains("inicio")){
        header.classList.add("header")
        header.classList.remove("headerTwo")
    }else{
        header.classList.add("headerTwo")
        header.classList.remove("header")
    }
}

function textAnimation() {
    const h1 = document.querySelector(".header-bottom");

    if(h1){
        const text = "Producto Integrador de aprendizaje: Linux";
        let positionText = 0;

        writeText();

        function writeText() {
            if (positionText < text.length) {
                h1.textContent += text.charAt(positionText);
                positionText++;
                setTimeout(writeText, 35);
            }
        }
    }

    const bienvenida = document.querySelector(".bienvenida-cli");
    if(bienvenida){
        const text = "$ echo ¡Hola, $(Usuario)! Bienvenido a nuestra página web!"
        let positionText = 0;

        writeCli();

        function writeCli(){
            if(positionText < text.length){


                bienvenida.textContent += text.charAt(positionText);
                positionText++;
                setTimeout(writeCli, 35);
            }
        }
    }
}

function blinkEffect(){
    const windowCliText = document.querySelectorAll(".window-cli_text");
    windowCliText.forEach(e => {
        e.classList.add("blinking")
    });
}

function animations(){
    const inicio = document.querySelector(".inicio");

    if(inicio){
        window.addEventListener("scroll", function(){
            const bentoSection = document.querySelector(".bento-section");
            if(bentoSection.getBoundingClientRect().top < 400 && bentoSection.getBoundingClientRect().bottom > 0){
                if(!(bentoSection.classList.contains("bentoAnimation"))){
                    bentoSection.classList.add("bentoAnimation")
                }
            }   
        })
    }

    timeLine();
    // const sectionCards = document.querySelector(".section-cards")
    // const card = document.querySelectorAll(".card");

    // if(sectionCards){
    //     window.addEventListener("scroll", () => {
    //         if(sectionCards.getBoundingClientRect().top < 0 && sectionCards.getBoundingClientRect().bottom > 0){
    //             card.forEach(e => {
    //                 e.classList.add("cards-animation");
    //                 e.classList.remove("hidden");
    //             });
    //         }
    //     })
    // }

    
}

function timeLine(){
    const timeLineContent = document.querySelector(".timeLine");
    

    

    window.addEventListener("scroll", function(){
        const timeLineTop = timeLineContent.getBoundingClientRect().top;
        if(timeLineTop < 400){
            timeLineContent.classList.add("in-view")
        }
        
    })
}