import {
      buttonPlay,
      buttonPause,
      buttonStop,
      buttonSet,
      buttonFlorestPlay,
      buttonFlorestPause,
      buttonRainPlay,
      buttonRainPause,
      buttonCoffePlay,
      buttonCoffePause,
      buttonFirePlay,
      buttonFirePause,
} from "./elements.js"

export default function events({
   controls,
   sound,
   timer, 
   newMinutes
})
{


   function florest() {
      buttonFlorestPlay.addEventListener("click", function(){
         controls.FlorestPlayPause()
         sound.FlorestPlay()
      })
      
      buttonFlorestPause.addEventListener("click", function(){
         controls.FlorestPlayPause()
         sound.FlorestPause()
      })
   }
   florest()
   function rain() {
      buttonRainPlay.addEventListener("click", function() {
         controls.RainPlayPause()
         sound.RainPlay()
      })
      buttonRainPause.addEventListener("click", function() {
         controls.RainPlayPause()
         sound.RainPause()
      })
   }
   rain()
   function coffe() {
      buttonCoffePlay.addEventListener("click", function() {
         controls.CoffePlayPause()
         sound.CoffePlay()
      })
      buttonCoffePause.addEventListener("click", function() {
         controls.CoffePlayPause()
         sound.CoffePause()
      })
   }
   coffe()
   function fire() {
      buttonFirePlay.addEventListener("click", function() {
         controls.FirePlayPause()
         sound.FirePlay()
      })
      buttonFirePause.addEventListener("click", function() {
         controls.FirePlayPause()
         sound.CoffePause()
      })
   }
   fire()
   function playTimer() {
      buttonPlay.addEventListener("click", function() {
         controls.play()
         timer.countDown()
      })
   }
   playTimer()
   function pauseTimer() {
      buttonPause.addEventListener("click", function() {
         controls.pause()
         timer.hold()
      })
   }
   pauseTimer()
   function setTimer() {
         buttonSet.addEventListener("click", function() {
            let newMinutes = controls.getMinutes()
            timer.hold()
            timer.updateDisplay(newMinutes, 0)
            timer.updateMinutes(newMinutes)
         })
   }
   setTimer()
   function stopTimer() {  
      buttonStop.addEventListener("click", function() {
         controls.reset()
         timer.hold()
         timer.updateDisplay(newMinutes, 0)
      })
   }
   stopTimer() 
   return   {
      florest,
      rain,
      coffe,
      fire,
      playTimer,
      pauseTimer,
      setTimer,
      stopTimer,
   } 
}