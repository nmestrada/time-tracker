/**
 * Timer Class holds the backbone logic of the tracking system
 */
export interface Timer {
  duration: number; // time will be in seconds?
  isPaused: boolean;
  name: string;
  timerId: NodeJS.Timeout;
}
export class Timer {
  constructor(name: string) {
    this.name = name;
    this.duration = 0;
    this.isPaused = false;
  }
  start() {
    this.startTracking();
  }
  startTracking() {
    // every second the duration gets updated a second
    this.timerId = setInterval(() => {
      this.duration++;
    }, 1000);
  }
  pause() {
    clearInterval(this.timerId);
    this.isPaused = true;
  }
  resume() {
    this.startTracking();
    this.isPaused = false;
  }
  end() {
    clearInterval(this.timerId);
    //save/return duration & name
    return {
      duration: this.duration,
      name: this.name,
    };
  }
  getDuration() {
    return this.duration;
  }
}
