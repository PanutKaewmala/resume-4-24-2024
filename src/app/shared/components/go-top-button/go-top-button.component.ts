import { Component, OnInit, ChangeDetectorRef, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-go-top-button',
  templateUrl: './go-top-button.component.html',
  styleUrls: ['./go-top-button.component.scss']
})
export class GoTopButtonComponent implements OnInit {
  showScrollTopButton = false;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.checkScroll, true);
  }

  checkScroll = (): void => {
    const scrollContainer = this.document.querySelector('.scrollable-container');
    const scrollTop = scrollContainer?.scrollTop || 0;
    const shouldShow = scrollTop > 300;

    if (this.showScrollTopButton !== shouldShow) {
      this.showScrollTopButton = shouldShow;
      this.cdr.detectChanges();
    }
  };

  scrollToTop(): void {
    const scrollContainer = this.document.querySelector('.scrollable-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
