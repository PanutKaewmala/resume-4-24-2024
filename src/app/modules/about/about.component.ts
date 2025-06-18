import { Component, OnInit, HostListener, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'src/app/shared/service/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  iconStyle = {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private route: ActivatedRoute, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.setDimensions(window.innerWidth);

    this.route.params.subscribe(params => {
      const fragment = params['fragment'];
      if (fragment) {
        this.scrollService.scrollToElementById(fragment);
      }
    });
  }

  ngAfterViewInit(): void {
    this.positionSkillTexts();
    this.randomizeOpacity();
    this.randomizeFontSize();
  }

  private resizeTimeout: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.setDimensions(event.target.innerWidth);
      this.positionSkillTexts();
    }, 10);
  }


  setDimensions(windowWidth: number): void {
    let width = '';
    let height = '';

    if (windowWidth < 650) {
      width = '52px';
      height = '52px';
    } else if (windowWidth < 1100) {
      width = '82px';
      height = '82px';
    } else {
      width = '102px';
      height = '102px';
    }

    this.iconStyle = { width, height };
  }

  positionSkillTexts(): void {
    const skillTexts = this.elementRef.nativeElement.querySelectorAll('.skill-texts div');
    const groupIcons = this.elementRef.nativeElement.querySelector('.group-icons');

    if (groupIcons) {
      const groupIconsRect = groupIcons.getBoundingClientRect();
      const skillTextsContainer = this.elementRef.nativeElement.querySelector('.skill-texts');

      if (skillTextsContainer) {
        this.renderer.setStyle(skillTextsContainer, 'width', `${groupIconsRect.width}px`);
        this.renderer.setStyle(skillTextsContainer, 'height', `${groupIconsRect.height}px`);
      }

      const positions: { x: number; y: number; width: number; height: number }[] = [];

      skillTexts.forEach((div: HTMLElement, index: number) => {
        let overlap = true;
        let randomX = 0;
        let randomY = 0;
        let attempts = 0;
        const maxAttempts = 100;

        while (overlap && attempts < maxAttempts) {
          randomX = Math.random() * (groupIconsRect.width - div.offsetWidth);
          randomY = Math.random() * (groupIconsRect.height - div.offsetHeight);

          overlap = positions.some(pos =>
            randomX < pos.x + pos.width &&
            randomX + div.offsetWidth > pos.x &&
            randomY < pos.y + pos.height &&
            randomY + div.offsetHeight > pos.y
          );

          attempts++;
        }

        positions.push({ x: randomX, y: randomY, width: div.offsetWidth, height: div.offsetHeight });
        this.renderer.setStyle(div, 'top', `${randomY}px`);
        this.renderer.setStyle(div, 'left', `${randomX}px`);

        if (index < skillTexts.length - 1) {
          this.renderer.setStyle(div, 'margin-right', '10px');
        }
      });
    } else {
      console.error("group-icons not found!");
    }
  }

  randomizeOpacity(): void {
    const skillTexts = this.elementRef.nativeElement.querySelectorAll('.skill-texts div');

    skillTexts.forEach((skill: HTMLElement) => {
      const randomOpacity = Math.random() * 0.8 + 0.2;
      this.renderer.setStyle(skill, 'opacity', randomOpacity.toString());
    });
  }

  randomizeFontSize(): void {
    const skillTexts = this.elementRef.nativeElement.querySelectorAll('.skill-texts div');

    skillTexts.forEach((skill: HTMLElement) => {
      const randomFontSize = Math.floor(Math.random() * 13) + 12;
      this.renderer.setStyle(skill, 'font-size', `${randomFontSize}px`);
    });
  }
}
