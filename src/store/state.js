import defaultBoard from '../default-board'
const board = JSON.parse(localStorage.getItem('board')) || defaultBoard
export default {
  board
}
