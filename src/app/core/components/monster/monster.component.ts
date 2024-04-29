import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements AfterViewInit {
  ngAfterViewInit() {
    const eyesContainer = document.querySelector('.eyes') as HTMLElement;
    const leftEye = document.querySelector('.left-eye') as HTMLElement;
    const rightEye = document.querySelector('.right-eye') as HTMLElement;
    
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const eyesRect = eyesContainer.getBoundingClientRect();
      const eyesCenterX = eyesRect.left + eyesRect.width / 2;
      const eyesCenterY = eyesRect.top + eyesRect.height / 2;

      const angle = Math.atan2(mouseY - eyesCenterY, mouseX - eyesCenterX);
      const maxDistance = Math.min(eyesRect.width, eyesRect.height) / 10;

      const eyeOffsetX = Math.cos(angle) * maxDistance;
      const eyeOffsetY = Math.sin(angle) * maxDistance;

      const eyeMaxX = eyesRect.width / 2 - leftEye.clientWidth / 2;
      const eyeMaxY = eyesRect.height / 2 - leftEye.clientHeight / 2;

      const clampedEyeOffsetX = Math.min(Math.max(eyeOffsetX, -eyeMaxX), eyeMaxX);
      const clampedEyeOffsetY = Math.min(Math.max(eyeOffsetY, -eyeMaxY), eyeMaxY);

      leftEye.style.transform = `translate(${clampedEyeOffsetX}px, ${clampedEyeOffsetY}px)`;
      rightEye.style.transform = `translate(${clampedEyeOffsetX}px, ${clampedEyeOffsetY}px)`;
    });
  }
}
