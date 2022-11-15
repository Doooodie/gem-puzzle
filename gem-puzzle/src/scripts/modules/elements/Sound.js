import Element from '../Element';
import popSound from '../../../assets/pop.mp3';

class SoundSwitcher extends Element {
  constructor(type = 'checkbox', ...args) {
    super(...args);
    this.root.type = type;
    this.root.checked = true;
    this.audio = new Audio(popSound);
  }

  playSound() {
    if (this.root.checked) this.audio.play();
  }
}

const soundContainer = new Element('sound-container');
const soundText = new Element('sound-text', 'Sound: ', 'span');
const soundSwitcher = new SoundSwitcher('checkbox', 'sound-switcher', '', 'input');

soundContainer.root.append(soundText.root, soundSwitcher.root);

export { soundContainer, soundSwitcher };
