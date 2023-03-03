export default function gameView() {
  return `
  <div class="game-view">
      <div class="top">
        <div class="top-wrap">
          <button class="again">Again!</button>
          <div class="mode-info"></div>
        </div>
        <div class="guess-my-number-wrap">
          <h1 class="guess-my-number">Guess My Number!</h1>
          <div class="result-wrap">
            <div class="result">?</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <form class="form-check">
            <input class="number-input" type="number" min="1"/>
            <button class="button-check" type="submit">Check!</button>
          </form>
        </div>
        <div class="bottom-right">
          <div class="center-p">
            <p class="decide">Start guessing...</p>
          </div>

          <p class="tries">Tries: 0</p>
          <div class="scores-array"></div>
        </div>
      </div>
    </div>
`
}
