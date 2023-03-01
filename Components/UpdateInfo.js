export default function updateInfo(guess) {
  const scores = document.querySelector('.scores-array')
  const mediaQuery = window.matchMedia('(max-width: 600px)')
  if (mediaQuery.matches) {
    scores.innerHTML = `<p class="score-record">${guess}</p>`
  } else {
    scores.innerHTML += `<p class="score-record">${guess}</p>`
  }
}
