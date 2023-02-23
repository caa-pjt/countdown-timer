import "../scss/style.scss"

import { ContDownTimer } from "./modules/countdownTimer.js"


// new Date(year, monthIndex, day, hours, minutes, seconds)
new ContDownTimer({
    launchDate :  new Date(2023, 10, 22, 0, 0),
    language : "fr"
}, () => {
        
    document.querySelector('.contdown-container').style.display = 'none'
    document.body.innerHTML = `<h1>The timer is ended !</h1>` 
})