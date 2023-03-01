export default function updateModeInfo(mode) {
  const modeInfo = document.querySelector('.mode-info')
  const numberInput = document.querySelector('.number-input')
  if (mode === 0) {
    modeInfo.textContent = '(Between 1 and 20)'
    numberInput.max = '20'
  } else if (mode === 1) {
    modeInfo.textContent = '(Between 1 and 100)'
    numberInput.max = '100'
  } else if (mode === 2) {
    modeInfo.textContent = '(Between 1 and 1000)'
    numberInput.max = '1000'
  }
}
