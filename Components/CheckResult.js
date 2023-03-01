export default function checkResult(guess, wantedNumber) {
  const decide = document.querySelector('.decide')
  if (guess === wantedNumber) {
    decide.textContent = '✅ WIN!'
    const result = document.querySelector('.result')
    result.textContent = wantedNumber
    result.style.width = '250px'
    document.querySelector('.game-view').style.backgroundColor = '#56aa3f'
    document.querySelector('.button-check').disabled = true
    document.querySelector('.number-input').disabled = true
    document.querySelector('.scores-array p:last-child').style.color = 'green'
  } else if (guess > wantedNumber) {
    decide.textContent = '👇 Lower'
  } else if (guess < wantedNumber) {
    decide.textContent = '☝ Higher'
  }
}
