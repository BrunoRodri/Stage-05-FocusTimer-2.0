import state from "./state.js";
import * as timer from "./timer.js"
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function addRunning(){
  // state.isRunning = document.documentElement.classList.add('running')
  state.isRunning = true
  timer.countdown()
}

export function stopRunning(){
  
  state.isRunning = false
  // document.documentElement.classList.remove('running')
}

export function plusMinutes(){
  const newMinute = timer.plusMinutes(el.minutes.textContent)
  el.minutes.textContent = newMinute
}

export function minusMinutes(){
  const newMinute = timer.minusMinutes(el.minutes.textContent)
  el.minutes.textContent = newMinute
}

export function setTree(){
  if(!state.isActive){
    state.isActive = true
    el.button[4].classList.toggle('ativo')
    sounds.pressTree.play()
    return
  }

  if (state.isActive) {
    state.isActive = false
    sounds.pressTree.pause()
    el.button[4].classList.toggle('ativo')
  }
}

export function setCloud(){
  if(!state.isActive){
    state.isActive = true
    el.button[5].classList.toggle('ativo')
    sounds.pressCloud.play()
    return
  }

  if (state.isActive) {
    state.isActive = false
    sounds.pressCloud.pause()
    el.button[5].classList.toggle('ativo')
  }
}

export function setStore(){
  if(!state.isActive){
    state.isActive = true
    el.button[6].classList.toggle('ativo')
    sounds.pressStore.play()
    return
  }

  if (state.isActive) {
    state.isActive = false
    sounds.pressStore.pause()
    el.button[6].classList.toggle('ativo')
  }
}

export function setFlame(){
  if(!state.isActive){
    state.isActive = true
    el.button[7].classList.toggle('ativo')
    sounds.pressFlame.play()
    return
  }
  if (state.isActive) {
    state.isActive = false
    sounds.pressFlame.pause()
    el.button[7].classList.toggle('ativo')
  }
}



