import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {Chip} from 'primeng/chip';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  imports: [
    NgIf,
    Chip
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  activeSection: string = 'about';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
