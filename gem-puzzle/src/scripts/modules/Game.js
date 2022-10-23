import Element from './Element';
import moves from './Moves';
import timer from './Timer';

class Game extends Element {
  constructor(fieldSize = 9, ...args) {
    super(...args);

    this.winState = false;

    this.fieldSize = fieldSize;

    this.range = Array.from(Array(this.fieldSize).keys(), (n) => n + 1);
    this.field = Array(Math.sqrt(this.fieldSize))
      .fill(null)
      .map(() => Array(Math.sqrt(this.fieldSize)).fill(0));

    this.cellWidth = '';

    this.emptyCell = null;
    this.emptyCellIndex = null;

    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;
  }

  startGame() {
    moves.resetMoves();
    timer.startTimer();
    this.generateField();
  }

  generateField() {
    this.root.innerHTML = null;

    const shuffledNumbers = this.shuffle();

    let index = 0;
    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        if (shuffledNumbers[index] === this.fieldSize) {
          this.field[i][k] = new Element('cell');
        } else {
          this.field[i][k] = new Element('cell', shuffledNumbers[index]);
        }
        this.root.append(this.field[i][k].root);
        index += 1;
      }
    }

    this.makeCellsActive();
  }

  refreshField() {
    this.root.innerHTML = null;

    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        this.root.append(this.field[i][k].root);
      }
    }

    this.makeCellsActive();
  }

  makeCellsActive() {
    this.top = this.findActiveCell('top');
    this.right = this.findActiveCell('right');
    this.left = this.findActiveCell('left');
    this.bottom = this.findActiveCell('bottom');

    this.enableCells();
  }

  enableCells = () => {
    if (this.top) this.top.root.addEventListener('click', this.moveBottom);
    if (this.right) this.right.root.addEventListener('click', this.moveLeft);
    if (this.bottom) this.bottom.root.addEventListener('click', this.moveTop);
    if (this.left) this.left.root.addEventListener('click', this.moveRight);
  };

  disableCells() {
    if (this.top) this.top.root.removeEventListener('click', this.moveBottom);
    if (this.right) this.right.root.removeEventListener('click', this.moveLeft);
    if (this.bottom) {
      this.bottom.root.removeEventListener('click', this.moveTop);
    }
    if (this.left) this.left.root.removeEventListener('click', this.moveRight);
  }

  moveBottom = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateY(${this.cellWidth})`;

    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0] - 1][this.emptyCellIndex[1]] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element(
        'cell',
        `${event.target.textContent}`,
      );

      this.refreshField();
    }, 500);
  };

  moveLeft = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateX(-${this.cellWidth})`;

    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] + 1] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element(
        'cell',
        `${event.target.textContent}`,
      );

      this.refreshField();
    }, 500);
  };

  moveTop = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateY(-${this.cellWidth})`;

    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0] + 1][this.emptyCellIndex[1]] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element(
        'cell',
        `${event.target.textContent}`,
      );

      this.refreshField();
    }, 500);
  };

  moveRight = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateX(${this.cellWidth})`;

    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] - 1] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element(
        'cell',
        `${event.target.textContent}`,
      );

      this.refreshField();
    }, 500);
  };

  findActiveCell(query) {
    this.emptyCellIndex = this.returnEmptyCell();
    this.emptyCell = this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]];

    if (query === 'top') {
      try {
        return this.field[this.emptyCellIndex[0] - 1][this.emptyCellIndex[1]];
      } catch (e) {
        return null;
      }
    }

    if (query === 'right') {
      try {
        return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] + 1];
      } catch (e) {
        return null;
      }
    }

    if (query === 'bottom') {
      try {
        return this.field[this.emptyCellIndex[0] + 1][this.emptyCellIndex[1]];
      } catch (e) {
        return null;
      }
    }

    if (query === 'left') {
      try {
        return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] - 1];
      } catch (e) {
        return null;
      }
    }

    return null;
  }

  returnEmptyCell() {
    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        if (this.field[i][k].root.textContent === '') {
          return [i, k];
        }
      }
    }

    return null;
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
}

const game = new Game(9, 'game-container');

export default game;
