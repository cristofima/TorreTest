import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-clock',
  templateUrl: './countdown-clock.component.html',
  styleUrls: ['./countdown-clock.component.scss'],
})
export class CountdownClockComponent implements OnInit, OnDestroy {

  @Input() deadline: Date;
  private timeinterval: any;

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  constructor() { }

  ngOnInit() {
    this.initializeClock();
  }

  ngOnDestroy(){
    if(this.timeinterval){
      clearInterval(this.timeinterval);
    }
  }

  getTimeRemaining(endtime: Date) {
    const today = new Date();
    const total = Date.parse(endtime.toString()) - Date.parse(today.toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  initializeClock() {
    const updateClock = ()=> {
      const t = this.getTimeRemaining(this.deadline);
  
      this.days = ('0' + t.days).slice(-2);
      this.hours = ('0' + t.hours).slice(-2);
      this.minutes = ('0' + t.minutes).slice(-2);
      this.seconds = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0 && this.timeinterval) {
        clearInterval(this.timeinterval);
      }
    }
  
    updateClock();
    this.timeinterval = setInterval(updateClock, 1000);
  }

}
