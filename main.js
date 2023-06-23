const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const img = document.querySelector("#img")
const btn = document.querySelector("#btn")

let lucks = [
    "Sonhos são caminhos construídos pelo coração.",
    "Impossível é uma palavra que serve só de enfeite no dicionário.",
    "Você é beleza, luz e força.",
    "Dias nublados guardam o sol atrás deles.",
    "Permita que o seu corpo descanse.",
    "Tenha coragem para se tornar aquilo que sonha.",
    "É tão bonita a força que você emana.",
    "Olhe para o céu e escute as mensagens de Deus para hoje!",
    "Você é energia, poder e coragem.",
    "Desconfie do destino e acredite em você.",
]

let lengthLucks = lucks.length
let randomLucks = Math.round(Math.random() * lengthLucks) 

//eventos
img.addEventListener("click", handleImgClick)
btn.addEventListener("click", resetClick)

//functions
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleImgClick() {
    toggleScreen()
    screen2.querySelector("p").innerText =`${lucks[randomLucks]}`
}

function resetClick() {
    randomLucks = Math.round(Math.random() * lengthLucks) 
    toggleScreen()
    
}


    











