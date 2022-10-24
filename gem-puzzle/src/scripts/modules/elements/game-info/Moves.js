import Element from '../../Element';

class Moves extends Element {
  constructor(...args) {
    super(...args);
    this.movesCount = 0;
    this.root.textContent = `Moves: ${this.movesCount}`;
  }

  updateText() {
    this.root.textContent = `Moves: ${this.movesCount}`;
  }

  resetMoves() {
    this.movesCount = 0;
    this.updateText();
  }

  countMove() {
    this.movesCount += 1;
    this.updateText();
  }
}

const moves = new Moves('dynamic-info', '', 'span');

export default moves;
