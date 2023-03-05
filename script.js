import startingScreen from './Components/GameStart.js'

const myScreenOrientation = window.screen.orientation
myScreenOrientation.lock('portrait')

startingScreen()
