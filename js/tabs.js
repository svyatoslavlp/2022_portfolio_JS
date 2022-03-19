const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')

console.log(tabImages);

tabButtons.forEach((tabButton, index) => {
   tabButton.addEventListener('click', (event) => {
      tabDescriptions.forEach((descr, indexDescr) => {
         if (index === indexDescr) {
            descr.classList.remove('hidden')
         } else {
            descr.classList.add('hidden')
         }
      })

      tabImages.forEach((image, indexImage) => {
         if (index === indexImage) {
            image.classList.remove('hidden')
         } else {
            image.classList.add('hidden')
         }
      })

      tabButtons.forEach((btn) => {
         if (btn === event.target) {
            btn.classList.add('design-list__item_active')
         } else {
            btn.classList.remove('design-list__item_active')
         }

      })
   })
})