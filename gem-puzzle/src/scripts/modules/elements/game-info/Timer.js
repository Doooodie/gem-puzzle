import Element from '../../Element';

class Timer extends Element {
  constructor(...args) {
    super(...args);
    this.minutes = '0';
    this.seconds = '00';
    this.root.textContent = `Time: ${this.minutes}:${this.seconds}`;
    this.interval = null;
  }

  startTimer() {
    this.resetTimer();

    const startTime = new Date().getTime();

    const count = () => {
      const difference = (new Date().getTime() - startTime) / 1000;
      this.seconds = parseInt(difference % 60, 10);
      this.minutes = parseInt((difference / 60) % 60, 10);

      if (this.seconds < 10) {
        this.seconds = `0${this.seconds}`;
      }

      this.root.textContent = `Time: ${this.minutes}:${this.seconds}`;
    };

    this.interval = setInterval(count, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.minutes = '0';
    this.seconds = '00';
  }
}

const timer = new Timer('dynamic-info', '', 'span');

export default timer;
