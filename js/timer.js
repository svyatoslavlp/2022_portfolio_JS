timerBlock = document.querySelector('.timer__time')
const updateClock = () => {
   const date = new Date()
   const hourse = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()
   const fHours = hourse < 10 ? '0' + hourse : hourse
   const fMinutes = minutes < 10 ? '0' + minutes : minutes
   const fSeconds = seconds < 10 ? '0' + seconds : seconds

   timerBlock.textContent = `${fHours}:${fMinutes}:${fSeconds}`
}
updateClock()
setInterval(updateClock, 500)