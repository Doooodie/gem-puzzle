export default class Element {
  constructor(className, text = '', element = 'div', href = '') {
    this.root = document.createElement(element);
    this.root.classList.add(className);
    this.root.textContent = text;
    this.root.href = href;
  }
}
