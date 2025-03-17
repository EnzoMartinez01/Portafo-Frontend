import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LanguageService} from '../../../services/language.service';
import {TranslatePipe} from '@ngx-translate/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
