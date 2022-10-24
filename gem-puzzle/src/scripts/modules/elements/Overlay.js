import Element from '../Element';
import wrapper from '../../index';

export default class Overlay extends Element {
  constructor(content, ...args) {
    super(...args);
    this.container = new Element('overlay-container');
    this.container.root.append(content);
    this.root.onclick = this.close;
  }

  open() {
    wrapper.prepend(this.root);
    this.root.after(this.container.root);
  }

  close = () => {
    this.root.remove();
    this.container.root.remove();
  };
}
