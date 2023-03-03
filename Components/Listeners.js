import updateInfo from './UpdateInfo.js'
import checkResult from './CheckResult.js'
import updateModeInfo from './UpdateModeInfo.js'
import gameView from '../UI/GameView.js'
import startingScreen from './GameStart.js'
import modeSelect from './ModeSelect.js'

let tries = 0

export function focusOnInput() {
  document.querySelector('.button-check').addEventListener('click', function () {
    document.querySelector('.number-input').focus()
  })
}

export function restart() {
  document.querySelector('.again').addEventListener('click', function () {
    tries = 0
    startingScreen()
  })
}

export function formCheck(wantedNumber) {
  const scoreInput = document.querySelector('.form-check')

  scoreInput.addEventListener('submit', function (e) {
    e.preventDefault()
    let guess = Number(e.target[0].value)
    if (guess >= 1 && guess !== '') {
      document.querySelector('.tries').textContent = `Tries: ${++tries}`
      updateInfo(guess)
      checkResult(guess, wantedNumber)
    }
    e.target[0].value = ''
  })
}

export function gameStart(modalButton, wrapper, gameMode) {
  const wantedNumber = modeSelect(gameMode)
  modalButton.addEventListener('click', function () {
    wrapper.innerHTML = gameView()
    focusOnInput()
    updateModeInfo(gameMode)
    restart()
    formCheck(wantedNumber)
  })
}
