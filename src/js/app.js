//menu hamburguesa variables
const menu = document.querySelector(".menu");
const enlaces = document.querySelector(".enlaces");
//darkMode variables
const toggle = document.querySelector(".toggleMode");
const body = document.querySelector("body");
//recognizeStart variables
const header = document.querySelector("header");
//textWelcome variables
const h1 = document.querySelector(".header-bottom");
//blinkEffect variables
const windowCliText = document.querySelectorAll(".window-cli_text");
//animations variables
const inicio = document.querySelector(".inicio");
//timeLine variables
const historia = document.querySelector(".inicio-historia");
//variable para el inicio de la pagina cli.html
const bienvenida = document.querySelector(".bienvenida-cli");

addEventListener("DOMContentLoaded", eventsListeners)

function eventsListeners(){
    menuHamburguesa();
    recognizeStart();
    blinkEffect();
    animations();
    darkMode();
}

function darkMode(){
    toggle.addEventListener("click", function(){
        body.classList.toggle("darkMode")
    })
}

function menuHamburguesa() {
    menu.addEventListener("click", function() {
        enlaces.classList.toggle("mostrar", !enlaces.classList.contains("mostrar"));
    });
}


function recognizeStart(){
    if(header.classList.contains("inicio")){
        header.classList.add("header")
        header.classList.remove("headerTwo")
    }else{
        header.classList.add("headerTwo")
        header.classList.remove("header")
    }
}

function animations(){
    textWelcome();
    bentoAnimation();
    cliWelcome();
    timeLine();
}


function textWelcome(){
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
}

function bentoAnimation(){
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
}

function cliWelcome(){
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
    windowCliText.forEach(e => {
        e.classList.add("blinking")
    });
}

function timeLine(){
    if(historia){
        const timeLineContent = document.querySelector(".timeLine");
        window.addEventListener("scroll", function(){
            const timeLineTop = timeLineContent.getBoundingClientRect().top;
            if(timeLineTop < 400){
                timeLineContent.classList.add("in-view")
            }
        })
    }
}