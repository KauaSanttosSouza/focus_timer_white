export default function time({
   secondDisplay,
   minutesDisplay,
   controls,
   buttonUp,
   buttonDown,
}) {
   let newMinutes
   let minutes = Number(minutesDisplay.textContent)
   let setTimerPause

   function updateDisplay(newMinutes, seconds){
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      newMinutes = newMinutes === null ? 0 : newMinutes
      seconds = seconds === undefined ? 0 : seconds

      minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
      secondDisplay.textContent = String(seconds).padStart(2, '0')
      hold()
   }
   
   function countDown() {
      setTimerPause = setTimeout(function(){
         let seconds = Number(secondDisplay.textContent)
         let minutes = Number(minutesDisplay.textContent)
         let isFinished = minutes <= 0 && seconds <= 0
         
         if(isFinished){
            hold()
            updateDisplay(newMinutes, 0)
            controls.reset()
            return
         }
   
         if(seconds <= 0){
            seconds = 3
            updateDisplay(--minutes, seconds)
         }
   
          updateDisplay(minutes, --seconds)
         countDown()
      }, 1000)
   }

   function updateMinutes(newMinutes){
      minutes = newMinutes
   }
   
   function updateNewMinutes(minutes){
      minutesDisplay.textContent = String(minutes).padStart(2, '0')
   }

   function hold() {
      clearTimeout(setTimerPause)
   }
   
   function upFive(){
      buttonUp.addEventListener('click', function() {
         let minutes = Number(minutesDisplay.textContent)
   
         if(minutes === undefined){
            alert('set um tempo')
         } else {
            minutes += 5
            updateNewMinutes(minutes)
            newMinutes = minutes
         }
      })
   }
   upFive()
   
    function upFive(){
      buttonUp.addEventListener('click', function() {
         let minutes = Number(minutesDisplay.textContent)   
         if(minutes === undefined){
            alert('set um tempo')
         } else {
            minutes += 5
            updateNewMinutes(minutes)
            newMinutes = minutes
         }
      })
   }
   upFive()
   
   function subFive(){
      buttonDown.addEventListener('click', function(){
            let minutes = Number(minutesDisplay.textContent)
            if(minutes > 4){
               minutes -= 5
               updateNewMinutes(minutes)
            newMinutes = minutes
   
   
            } else {
               alert('menor que 5 minutos')
            }
         })
   }
   subFive()

   return {
      updateDisplay,
      countDown,
      upFive,
      subFive,
      updateNewMinutes,
      hold,
      updateMinutes
   }
}
