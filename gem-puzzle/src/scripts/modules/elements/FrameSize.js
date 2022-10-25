import Element from '../Element';

class FrameSize extends Element {
  constructor(fieldSize, ...args) {
    super(...args);
    this.fieldSize = Math.sqrt(fieldSize);
    this.root.textContent = `Frame size: ${this.fieldSize}x${this.fieldSize}`;
  }

  update(fieldSize) {
    this.fieldSize = Math.sqrt(fieldSize);
    this.root.textContent = `Frame size: ${this.fieldSize}x${this.fieldSize}`;
  }
}

const frameSize = new FrameSize(9, 'frame-size');

export default frameSize;
