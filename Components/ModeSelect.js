export default function modeSelect(mode) {
  switch (mode) {
    case 0:
      return getRandom(1, 21)
    case 1:
      return getRandom(1, 101)
    case 2:
      return getRandom(1, 1001)
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
