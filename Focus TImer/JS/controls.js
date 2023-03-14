export default function control({
   buttonFlorestPlay,
   buttonFlorestPause,
   buttonRainPlay,
   buttonRainPause,
   buttonCoffePlay,
   buttonCoffePause,
   buttonFirePlay,
   buttonFirePause,
   buttonPlay,
   buttonPause,
   buttonSet,
   buttonStop,
}) {

   function reset(){
      buttonStop.classList.add("hide")
      buttonSet.classList.remove("hide")
      buttonPause.classList.add("hide")
      buttonPlay.classList.remove("hide")
   }

   function FlorestPlayPause() {
      buttonFlorestPlay.classList.toggle("hide")
      buttonFlorestPause.classList.toggle("hide")
   }
   function RainPlayPause() {
      buttonRainPlay.classList.toggle("hide")
      buttonRainPause.classList.toggle("hide")
   }
   function CoffePlayPause() {
      buttonCoffePlay.classList.toggle("hide")
      buttonCoffePause.classList.toggle("hide")
   }
   function FirePlayPause() {
      buttonFirePlay.classList.toggle("hide")
      buttonFirePause.classList.toggle("hide")
   }
 
   function play() {
      buttonPlay.classList.add("hide")
      buttonPause.classList.remove("hide")
      buttonSet.classList.add("hide")
      buttonStop.classList.remove("hide")
   }
   function pause() {
      buttonPause.classList.add("hide")
      buttonPlay.classList.remove("hide")
   }
   function stop() {
      reset()
   }
   function getMinutes() {
      let newMinutes = prompt('Qual é o tempo?')
      if (!newMinutes) {
         return false
      }
      return newMinutes
   }

   return {
      reset,
      FlorestPlayPause,
      RainPlayPause,
      CoffePlayPause,
      FirePlayPause,
      play,
      pause,
      stop,
      getMinutes
   }
}