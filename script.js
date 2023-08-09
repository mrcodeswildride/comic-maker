let textBubble1 = document.getElementById(`textBubble1`)
let textBubble2 = document.getElementById(`textBubble2`)
let textBubble3 = document.getElementById(`textBubble3`)

let character1 = document.getElementById(`character1`)
let character2 = document.getElementById(`character2`)
let character3 = document.getElementById(`character3`)

let textBox = document.getElementById(`textBox`)
let opacitySlider = document.getElementById(`opacitySlider`)
let rotationSlider = document.getElementById(`rotationSlider`)

textBubble1.addEventListener(`click`, changeText)
textBubble2.addEventListener(`click`, changeText)
textBubble3.addEventListener(`click`, changeText)

character1.addEventListener(`click`, changeCharacter)
character2.addEventListener(`click`, changeCharacter)
character3.addEventListener(`click`, changeCharacter)

textBox.focus()

function changeText() {
  this.innerHTML = textBox.value
}

function changeCharacter() {
  this.style.opacity = `${opacitySlider.value}%`
  this.style.transform = `rotate(${rotationSlider.value}deg)`
}
