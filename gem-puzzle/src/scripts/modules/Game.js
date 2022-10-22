import Element from './Element';
import moves from './Moves';
import timer from './Timer';

class Game extends Element {
  constructor(fieldSize = 9, ...args) {
    super(...args);
    this.winState = false;
    this.fieldSize = fieldSize;
    this.range = Array.from(Array(this.fieldSize).keys(), (n) => n + 1);
  }

  startGame() {
    moves.resetMoves();
    timer.startTimer();
    this.generateField();
  }

  shuffle() {
    const array = Array.from(this.range);

    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  generateField() {
    this.root.innerHTML = null;

    const shuffledNumbers = this.shuffle();
    const field = Array(Math.sqrt(this.fieldSize))
      .fill(null)
      .map(() => Array(Math.sqrt(this.fieldSize)).fill(0));

    let index = 0;
    for (let i = 0; i < field.length; i += 1) {
      for (let k = 0; k < field[0].length; k += 1) {
        if (shuffledNumbers[index] === this.fieldSize) {
          field[i][k] = new Element('frame');
        } else {
          field[i][k] = new Element('frame', shuffledNumbers[index]);
        }
        this.root.append(field[i][k].root);
        index += 1;
      }
    }
  }
}

const game = new Game(9, 'game-container');

export default game;
