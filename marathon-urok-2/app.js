'use strict'

const item = document.querySelector('.item')
const placeholders = document.querySelectorAll(".placeholder")

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders){
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave' , dragleave)
  placeholder.addEventListener('drop', dragdrop)
}


function dragStart(event){
event.target.classList.add('hold')
setTimeout(() => event.target.classList.add('hide') ,0)
item.innerHTML = 'AAA!!! Меня трогают!!!'
}

function dragEnd(event){
  event.target.classList.remove('hold','hide' )
  item.innerHTML = 'Перетащи меня'
}

function dragover(event){
  event.preventDefault()
}

function dragenter(event){
  event.target.classList.add('hovered')
}

function dragleave(event){
  event.target.classList.remove('hovered')
}


function dragdrop(event){
  event.target.append(item)
  event.target.classList.remove('hovered')
}