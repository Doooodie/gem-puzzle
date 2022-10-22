import Element from './Element';

class Timer extends Element {
  constructor(...args) {
    super(...args);
    this.minutes = '0';
    this.seconds = '00';
    this.root.textContent = `Time: ${this.minutes}:${this.seconds}`;
    this.interval = null;
  }

  startTimer() {
    clearInterval(this.interval);
    this.minutes = '0';
    this.seconds = '00';

    const startTime = new Date().getTime();

    const count = () => {
      const difference = (new Date().getTime() - startTime) / 1000;
      let seconds = parseInt(difference % 60, 10);
      const minutes = parseInt((difference / 60) % 60, 10);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      this.root.textContent = `Time: ${minutes}:${seconds}`;
    };

    this.interval = setInterval(count, 1000);
  }
}

const timer = new Timer('dynamic-info', '', 'span');

export default timer;
