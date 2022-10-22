import Element from './Element';
import game from './Game';

const buttonsContainer = new Element('buttons-container').root;

class StartButton extends Element {
  constructor(...args) {
    super(...args);
    this.root.addEventListener('click', () => {
      game.startGame();
    });
  }
}

const buttons = [
  new Element('button', 'Save', 'button').root,
  new StartButton('button', 'Start', 'button').root,
  new Element('button', 'Results', 'button').root,
];

buttons.forEach((button) => {
  buttonsContainer.append(button);
});

export default buttonsContainer;
