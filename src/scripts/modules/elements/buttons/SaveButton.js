import Element from '../../Element';
import game from '../Game';

class SaveButton extends Element {
  constructor(...args) {
    super(...args);
    this.root.disabled = true;
    this.root.onclick = game.saveGame;
  }

  enable() {
    this.root.disabled = false;
  }

  disable() {
    this.root.disabled = true;
  }
}

const saveButton = new SaveButton('button', 'Save', 'button');

export default saveButton;
