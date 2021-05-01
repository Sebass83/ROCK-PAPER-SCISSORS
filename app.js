const juego = ["Piedra","Papel","Tijera"];

function pc(juego){
  return juego[Math.floor(Math.random() * 3)]
  
}
pc(juego);

const aparecer = document.querySelector(".aparecer")
const puntaje = document.querySelector(".puntaje")

aparecer.innerHTML = ""

let piedra = document.getElementById("Piedra")

piedra.addEventListener("click",(e)=>{
  partida(pc(juego), e.target.id)
})

let papel = document.getElementById("Papel")
papel.addEventListener("click",(e)=>{
  partida(pc(juego), e.target.id)
})

let tijera = document.getElementById("Tijera")
tijera.addEventListener("click",(e)=>{
  partida(pc(juego), e.target.id)
})

let puntajePc = 0
let PuntajeJugador = 0

function resetContador(){
  puntajePc = 0
  PuntajeJugador = 0
}

function ganador(puntajePc,PuntajeJugador){
  const ganador = document.querySelector(".ganador")
if ((puntajePc == 5)||(PuntajeJugador == 5)){
  if(puntajePc<PuntajeJugador){
    ganador.innerHTML=`Gana Jugador -- Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`
    resetContador()
    setInterval(() => {
      ganador.innerHTML=""
    }, 5000);
  }else{
    ganador.innerHTML=`Gana PC -- Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`
    resetContador()
    setTimeout(() => {
      ganador.innerHTML=""
    }, 5000);
  }
}}

function partida (pc, jugador){
  const aparecer = document.querySelector(".aparecer")
  if (pc === jugador){
    return aparecer.innerHTML = "Empate", puntaje.innerHTML=`Empate // Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`
  } else if((pc === "Piedra") && (jugador === "Tijera")){
    puntajePc++
    ganador(puntajePc,PuntajeJugador)
    return (aparecer.innerHTML = "Gana PC -- Piedra gana a Tijera", puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`)
  }else if((pc === "Piedra") && (jugador === "Papel")){
    PuntajeJugador++
    ganador(puntajePc,PuntajeJugador)
    return (aparecer.innerHTML ="Gana Jugador -- Papel gana a Piedra",puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`)
  }else if((pc === "Papel") && (jugador === "Tijera")){
    PuntajeJugador++
    ganador(puntajePc,PuntajeJugador)
    return (aparecer.innerHTML ="Gana Jugador -- Tijera gana a Papel",puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`)
  }else if((pc === "Papel") && (jugador === "Piedra")){
    puntajePc++
    ganador(puntajePc,PuntajeJugador)
    return aparecer.innerHTML ="Gana PC -- Papel gana a Piedra",puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`
  }else if((pc === "Tijera") && (jugador === "Papel")){
    puntajePc++
    ganador(puntajePc,PuntajeJugador)
    return (aparecer.innerHTML ="Gana PC -- Tijera gana a papel",puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`)
  }else if((pc === "Tijera") && (jugador === "Piedra")){
    PuntajeJugador++
    ganador(puntajePc,PuntajeJugador)
    return (aparecer.innerHTML ="Gana Jugador -- Piedra gana a Tijera",puntaje.innerHTML=`Jugador: ${PuntajeJugador} -- Pc: ${puntajePc}`)
  }
}








