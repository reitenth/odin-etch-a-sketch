let board = document.querySelector('.board');
createBoard(32);

function createBoard() {
  board.style.gridTemplateColumns = 'repeat(16, 1fr)';
  board.style.gridTemplateRows = 'repeat(16, 1fr)';
}
console.log(board.style.gridTemplateColumns);
