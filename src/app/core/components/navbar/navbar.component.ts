import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/service/scroll.service';
import anime from 'animejs/lib/anime.es.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropdownOpen: boolean = false;
  dropdownProfileOpen: boolean = false;

  constructor(private scrollService: ScrollService, private router: Router) { }

  ngOnInit() { }
  // Animation Menu //

  // menuAnimation() {
  //   anime({
  //     targets: '.function-based-values-demo .el',
  //     translateX: function (el: HTMLElement) {
  //       return el.getAttribute('data-x');
  //     },
  //     translateY: function (el: HTMLElement, i: number) {
  //       return 20 + (-20 * i);
  //     },
  //     scale: function (el: HTMLElement, i: number, l: number) {
  //       return (l - i) / 2 + .25;
  //     },
  //     rotate: function () { return anime.random(-360, 360); },
  //     borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
  //     duration: function () { return anime.random(2200, 2800); },
  //     delay: function () { return anime.random(0, 500); },
  //     direction: 'alternate',
  //     loop: true
  //   });
  // }

  // resetAnimation() {
  //   const elements = document.querySelectorAll('.function-based-values-demo .el');
  //   anime.remove(elements);
  //   elements.forEach((el) => {
  //     const element = el as HTMLElement;
  //     element.style.transform = '';
  //     element.style.rotate = '';
  //     element.style.scale = '';
  //     element.style.borderRadius = '';
  //     element.style.transitionDuration = '';
  //     element.style.transitionDelay = '';
  //   });
  // }

  scrollToProjects(): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('side-projects');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      });
    } else {
      const element = document.getElementById('side-projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToSkills(): void {
    if (this.router.url !== '/about') {
      this.router.navigateByUrl('/about').then(() => {
        setTimeout(() => {
          const element = document.getElementById('skills');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      });
    } else {
      const element = document.getElementById('skills');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToCertificates(): void {
    if (this.router.url !== '/about') {
      this.router.navigateByUrl('/about').then(() => {
        setTimeout(() => {
          const element = document.getElementById('certificates');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      });
    } else {
      const element = document.getElementById('certificates');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;

    // Animation Menu //
    // if (this.dropdownOpen) {
    //   this.menuAnimation();
    // } else {
    //   this.resetAnimation();
    // }
  }
}
