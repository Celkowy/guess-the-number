import { gameStart } from './listeners.js'
import modeModal from './ModeModal.js'

export default function startingScreen() {
  const wrapper = document.querySelector('.wrapper')
  wrapper.innerHTML = modeModal()
  document.querySelectorAll('.modal-button').forEach(function (modalButton, gameMode) {
    gameStart(modalButton, wrapper, gameMode)
  })
}
