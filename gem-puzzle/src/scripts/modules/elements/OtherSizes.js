import Element from '../Element';
import game from './Game';

class OtherSizes extends Element {
  constructor(...args) {
    super(...args);
    this.text = new Element('other-sizes-text', 'Other sizes:', 'span');
    this.sizes = [];
    for (let i = 3; i <= 8; i += 1) {
      const size = new Element('other-sizes-link', `${i}x${i}`, 'a', '#');
      size.root.onclick = () => {
        game.newSize(i);
      };
      this.sizes.push(size.root);
    }

    this.root.append(this.text.root, ...this.sizes);
  }
}

const otherSizes = new OtherSizes('other-sizes');

export default otherSizes;
