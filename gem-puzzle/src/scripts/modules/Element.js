export default class Element {
  constructor(className, innerHTML = '', element = 'div', href = '') {
    this.root = document.createElement(element);
    this.root.classList.add(className);
    this.root.innerHTML = innerHTML;
    this.root.href = href;
  }
}
