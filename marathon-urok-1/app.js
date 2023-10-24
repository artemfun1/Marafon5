'use strict'

function slidesPlaugin(e =0){
  const slides = document.querySelectorAll('.slide')

  slides[e].classList.add('active')

  for (const slide of slides){
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
    })
  }
  
  function clearActiveClasses(){
    slides.forEach((slide)=>{
      slide.classList.remove('active')
    })
  }

}

slidesPlaugin(1)