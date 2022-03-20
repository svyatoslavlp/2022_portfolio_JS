timerBlock = document.querySelector('.timer__time')
const updateClock = () => {
   const date = new Date().getTime()
   const dateDeadline = new Date('31 march 2022').getTime()
   const timeRemaining = (dateDeadline - date) / 1000

   const hourse = Math.floor(timeRemaining / 60 / 60)
   const minutes = Math.floor((timeRemaining / 60 / 60) % 60)
   const seconds = Math.floor(timeRemaining % 60)

   const fHours = hourse < 10 ? '0' + hourse : hourse
   const fMinutes = minutes < 10 ? '0' + minutes : minutes
   const fSeconds = seconds < 10 ? '0' + seconds : seconds

   timerBlock.textContent = `${fHours}:${fMinutes}:${fSeconds}`
}
updateClock()
setInterval(updateClock, 500)