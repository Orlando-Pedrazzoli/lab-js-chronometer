class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.currentTime === 3) {
          this.currentTime = 3;
        } else {
          this.currentTime += 1;
        }

        if (printTimeCallback && typeof printTimeCallback === 'function') {
          printTimeCallback();
        }
      }, 1000); // 1000 milliseconds for 1 second
    }
  }

  getMinutes() {
    if (this.currentTime >= 60) {
      return Math.floor(this.currentTime / 60);
    } else {
      return 0;
    }
  }

  getSeconds() {
    if (this.currentTime > 0) {
      return this.currentTime % 60;
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    if (value >= 0 && value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
