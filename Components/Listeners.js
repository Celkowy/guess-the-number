import updateInfo from './UpdateInfo.js'
import checkResult from './CheckResult.js'
import updateModeInfo from './UpdateModeInfo.js'
import gameView from './GameView.js'
import modeSelect from './ModeSelect.js'
import startingScreen from './GameStart.js'

let tries = 0
const wantedNumber = modeSelect()

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

export function formCheck() {
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
  modalButton.addEventListener('click', function () {
    wrapper.innerHTML = gameView()
    focusOnInput()
    updateModeInfo(gameMode)
    restart()
    formCheck()
  })
}
