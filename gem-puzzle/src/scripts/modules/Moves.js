import Element from './Element';

class Moves extends Element {
  constructor(...args) {
    super(...args);
    this.movesCount = 0;
    this.root.textContent = `Moves: ${this.movesCount}`;
  }

  resetMoves() {
    this.movesCount = 0;
  }

  countMove() {
    this.movesCount += 1;
  }
}

const moves = new Moves('dynamic-info', '', 'span');

export default moves;
