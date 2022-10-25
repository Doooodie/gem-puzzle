import Element from '../Element';
import moves from './game-info/Moves';
import timer from './game-info/Timer';
import { soundSwitcher } from './Sound';
import Overlay from './Overlay';
import saveButton from './buttons/SaveButton';

class Game extends Element {
  constructor(fieldSize = 9, ...args) {
    super(...args);

    this.winState = false;

    this.fieldSize = fieldSize;

    this.savedRange = null;
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
    const save = JSON.parse(localStorage.getItem('savedGame'));

    if (!save) {
      moves.resetMoves();
      timer.startTimer();
      this.generateField();
    } else {
      const request = confirm('Saved game detected! Do you want to load game?');

      if (request) {
        timer.startTime = save.startTime;
        timer.nowTime = save.nowTime;
        timer.minutes = save.minutes;
        timer.seconds = save.seconds;
        timer.continueTimer();

        moves.movesCount = save.moves;
        moves.updateText();

        soundSwitcher.root.checked = save.soundStatus;

        this.fieldSize = save.fieldSize;
        this.field = save.field;
        this.savedRange = save.range;

        this.loadField();
      } else {
        moves.resetMoves();
        timer.startTimer();
        this.generateField();
      }
    }

    saveButton.enable();
  }

  stopGame() {
    timer.stopTimer();
    this.disableCells();
    this.saveResult();
    saveButton.disable();

    const overlay = new Overlay(
      `Hooray! You solved the puzzle in ${timer.minutes}:${timer.seconds} and ${moves.movesCount} moves!`,
      'overlay',
    );
    overlay.open();
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

    if (!this.hasSolution(shuffledNumbers)) this.generateField();
    this.makeCellsActive();

    this.checkForWin();
    if (this.winState) this.stopGame();
  }

  loadField() {
    this.root.innerHTML = null;

    let index = 0;
    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        this.field[i][k] = new Element('cell', this.savedRange[index]);
        this.root.append(this.field[i][k].root);
        index += 1;
      }
    }

    this.makeCellsActive();

    this.checkForWin();
    if (this.winState) this.stopGame();
  }

  hasSolution(numbers) {
    const cleanNums = numbers.filter((x) => x !== this.fieldSize);
    const rowSize = Math.sqrt(this.fieldSize);
    const emptyRow = this.returnEmptyCell()[0];

    let invertions = 0;
    let result;

    for (let i = 0; i < this.fieldSize; i += 1) {
      for (let k = i + 1; k < this.fieldSize; k += 1) {
        if (cleanNums[k] < cleanNums[i]) {
          invertions += 1;
        }
      }
    }

    if (rowSize % 2 !== 0) {
      result = invertions % 2 === 0;
    } else {
      result = (invertions % 2) + emptyRow !== 0;
    }

    return result;
  }

  refreshField() {
    this.root.innerHTML = null;

    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        this.root.append(this.field[i][k].root);
      }
    }

    this.makeCellsActive();

    this.checkForWin();
    if (this.winState) this.stopGame();
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

    soundSwitcher.playSound();
    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0] - 1][this.emptyCellIndex[1]] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element('cell', `${event.target.textContent}`);

      this.refreshField();
    }, 500);
  };

  moveLeft = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateX(-${this.cellWidth})`;

    soundSwitcher.playSound();
    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] + 1] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element('cell', `${event.target.textContent}`);

      this.refreshField();
    }, 500);
  };

  moveTop = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateY(-${this.cellWidth})`;

    soundSwitcher.playSound();
    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0] + 1][this.emptyCellIndex[1]] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element('cell', `${event.target.textContent}`);

      this.refreshField();
    }, 500);
  };

  moveRight = (e) => {
    this.cellWidth = getComputedStyle(this.emptyCell.root).width;

    const event = e;
    event.target.style.transform = `translateX(${this.cellWidth})`;

    soundSwitcher.playSound();
    moves.countMove();
    this.disableCells();

    setTimeout(() => {
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1] - 1] = new Element('cell');
      this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]] = new Element('cell', `${event.target.textContent}`);

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

  checkForWin() {
    const solution = this.range.filter((x) => x !== this.fieldSize);
    const status = [];

    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        if (this.field[i][k].root.textContent !== '') {
          status.push(+this.field[i][k].root.textContent);
        }
      }
    }

    if (solution.every((v, i) => v === status[i])) {
      this.winState = true;
    } else {
      this.winState = false;
    }
  }

  saveResult() {
    let storage = JSON.parse(localStorage.getItem('results'));

    if (!storage) {
      localStorage.setItem('results', JSON.stringify([]));
      storage = JSON.parse(localStorage.getItem('results'));
    }

    const results = {
      fieldSize: `${this.fieldSize ** 0.5}x${this.fieldSize ** 0.5}`,
      time: `${timer.minutes}:${timer.seconds}`,
      moves: moves.movesCount,
    };

    if (storage.length < 10) {
      localStorage.setItem('results', JSON.stringify([...storage, results]));
    }
  }

  saveGame = () => {
    const savedRange = [];

    for (let i = 0; i < this.field.length; i += 1) {
      for (let k = 0; k < this.field[0].length; k += 1) {
        savedRange.push(this.field[i][k].root.textContent);
      }
    }

    const gameState = {
      minutes: timer.minutes,
      seconds: timer.seconds,
      startTime: timer.startTime,
      nowTime: timer.nowTime,
      moves: moves.movesCount,
      range: savedRange,
      field: this.field,
      fieldSize: this.fieldSize,
      soundStatus: soundSwitcher.root.checked,
    };

    localStorage.setItem('savedGame', JSON.stringify(gameState));
  };

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
