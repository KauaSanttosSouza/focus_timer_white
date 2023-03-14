export default function sound() {
const soundFlorest = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Chuva.wav?raw=true")
const soundCoffe = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Cafeteria.wav?raw=true")
const soundFire = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Lareira.wav?raw=true")

function FlorestPlay() {
   soundFlorest.loop = true;
   soundFlorest.play()
}
function FlorestPause() {
   soundFlorest.pause()
}

function RainPlay() {
   soundRain.loop = true;
   soundRain.play()
}
function RainPause() {
   soundRain.pause()
}

function CoffePlay() {
   soundCoffe.loop = true;
   soundCoffe.play()
}
function CoffePause() {
   soundCoffe.pause()
}

function FirePlay() {
   soundFire.loop = true;
   soundFire.play()
}
function FirePause() {
   soundFire.pause()
}

return {
   FlorestPlay,
   FlorestPause,
   RainPlay,
   RainPause,
   CoffePlay,
   CoffePause,
   FirePlay,
   FirePause,
}


}