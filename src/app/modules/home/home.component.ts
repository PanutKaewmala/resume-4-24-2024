import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  textFirstOpacityValue: number = 0;
  textSecondOpacityValue: number = 0;
  containerOpacityValue: number = 0;
  imageOpacityValue: number = 0;
  textFirstIntervalId: any;
  textSecondIntervalId: any;
  containerIntervalId: any;
  imageIntervalId: any;

  ngOnInit(): void {
    this.textFirstIntervalId = setInterval(() => {
      if (this.textFirstOpacityValue < 100) {
        this.textFirstOpacityValue += 1;
      } else {
        clearInterval(this.textFirstIntervalId);
        this.startTextSecondOpacity();
      }
    }, 3);
  }

  startTextSecondOpacity(): void {
    this.textSecondIntervalId = setInterval(() => {
      if (this.textSecondOpacityValue < 100) {
        this.textSecondOpacityValue += 1;
      } else {
        clearInterval(this.textSecondIntervalId);
        this.startImageOpacity();
      }
    }, 0.1);
  }

  startImageOpacity(): void {
    this.imageIntervalId = setInterval(() => {
      if (this.imageOpacityValue < 100) {
        this.imageOpacityValue += 1;
      } else {
        clearInterval(this.imageIntervalId);
        this.startContainerOpacity();
      }
    }, 10);
  }

  startContainerOpacity(): void {
    this.containerIntervalId = setInterval(() => {
      if (this.containerOpacityValue < 100) {
        this.containerOpacityValue += 1;
      } else {
        clearInterval(this.containerIntervalId);
      }
    }, 3);
  }

  ngOnDestroy(): void {
    if (this.textFirstIntervalId) {
      clearInterval(this.textFirstIntervalId);
    }
    if (this.textSecondIntervalId) {
      clearInterval(this.textSecondIntervalId);
    }
    if (this.imageIntervalId) {
      clearInterval(this.imageIntervalId);
    }
    if (this.containerIntervalId) {
      clearInterval(this.containerIntervalId);
    }
  }
}
