import Element from './Element';

const buttonsContainer = new Element('buttons-container').root;

const buttons = [
  new Element('button', 'Save', 'button').root,
  new Element('button', 'Start', 'button').root,
  new Element('button', 'Results', 'button').root,
];

buttons.forEach((button) => {
  buttonsContainer.append(button);
});

export default buttonsContainer;
