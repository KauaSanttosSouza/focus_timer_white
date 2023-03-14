import time from "./timer.js"
import control from "./controls.js"
import sounds from "./sounds.js"
import event from "./events.js"

import {
   buttonPlay,
   buttonPause,
   buttonStop,
   buttonSet,
   buttonUp,
   buttonDown,
   buttonFlorestPlay,
   buttonFlorestPause,
   buttonRainPlay,
   buttonRainPause,
   buttonCoffePlay,
   buttonCoffePause,
   buttonFirePlay,
   buttonFirePause,
   minutesDisplay,
   secondDisplay,
} from "./elements.js"
const sound = sounds()

const controls = control({
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
})
const timer = time({
   secondDisplay,
   minutesDisplay,
   controls,
   buttonUp,
   buttonDown,
})

event({
   controls,
   sound,
   timer,
})



