import { controls, buttons } from "./elements.js"
import * as actions from './actions.js'


export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function")  {
      return
    }

    actions[action]()
  })
}

export function registerButtons(){
  buttons.addEventListener('click',(event) => {
    const button = event.target.dataset.button
    if (typeof actions[button] != "function")  {
      return
    }

    actions[button]()
  })
}
