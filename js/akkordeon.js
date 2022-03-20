const akkordeon = document.querySelector('.feature-list')
const akkoedeonButtons = akkordeon.querySelectorAll('.feature__link')

akkoedeonButtons.forEach((btn) => {
   btn.addEventListener('click', () => {
      akkoedeonButtons.forEach((button) => {
         button.classList.remove('feature__link_active')
         button.nextElementSibling.classList.add('hidden')
      })

      btn.classList.toggle('feature__link_active')
      btn.nextElementSibling.classList.toggle('hidden')
   })
})