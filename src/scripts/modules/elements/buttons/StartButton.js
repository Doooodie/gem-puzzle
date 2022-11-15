import Element from '../../Element';
import game from '../Game';

class StartButton extends Element {
  constructor(...args) {
    super(...args);
    this.root.addEventListener('click', () => {
      game.startGame();
    });
  }
}

const startButton = new StartButton('button', 'Start', 'button');

export default startButton;
