import Element from '../../Element';
import Overlay from '../Overlay';

class ResultsButton extends Element {
  constructor(...args) {
    super(...args);
    this.container = new Element('results-container');
    this.results = null;
    this.root.onclick = this.showResults;
  }

  showResults = () => {
    this.container.root.innerHTML = null;

    const overlay = new Overlay(this.container.root, 'overlay');
    const results = JSON.parse(localStorage.getItem('results'));

    results.forEach((result, i) => {
      const container = new Element('result-container');
      const place = new Element('result-place', `${i + 1}.`, 'span');
      const fieldSize = new Element('result-size', `field size: ${result.fieldSize}`, 'span');
      const time = new Element('result-time', `time: ${result.time}`, 'span');
      const moves = new Element('result-moves', `moves: ${result.moves}`, 'span');

      container.root.append(place.root, fieldSize.root, time.root, moves.root);
      this.container.root.append(container.root);
    });

    overlay.open();
  };
}

const resultsButton = new ResultsButton('button', 'Results', 'button');

export default resultsButton;
