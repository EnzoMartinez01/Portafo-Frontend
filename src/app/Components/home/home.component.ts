import { Component } from '@angular/core';
import {Splitter} from 'primeng/splitter';
import {Chip} from 'primeng/chip';
import {Carousel} from 'primeng/carousel';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {PrimeTemplate} from 'primeng/api';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    Splitter,
    Chip,
    Carousel,
    PrimeTemplate,
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  projects = [
    {
      id: 1,
      title: 'Ecommerce',
      description: 'Este Ecommerce es una plataforma de compras en línea desarrollada con Angular en el frontend y Spring Boot en el backend, permitiendo una experiencia de usuario fluida y segura.',
      image: 'https://i.imgur.com/ev4LNEg.png',
      link: 'https://github.com/EnzoMartinez01/E-Commerce/',
      programmingLanguage: [
        { id: 1, name: 'Spring Boot' },
        { id: 3, name: 'Angular' }
      ]
    },
    {
      id: 2,
      title: 'Mantenimiento de Entidades',
      description: 'Este sistema está diseñado para la gestión y mantenimiento de datos a través de grillas interactivas, permitiendo a los usuarios visualizar, filtrar, editar y eliminar registros de manera eficiente. Se desarrolló utilizando Angular en el frontend y Spring Boot en el backend, asegurando una arquitectura modular y escalable.',
      image: 'https://i.imgur.com/7gD3RFd.png',
      link: 'https://github.com/EnzoMartinez01/Prueba-tecnica/',
      programmingLanguage: [
        { id: 1, name: 'Spring Boot' },
        { id: 2, name: 'Angular' }
      ]
    },
    {
      id: 3,
      title: 'NL Solutions TI',
      description: 'Este proyecto es una página web desarrollada en React, diseñada para ofrecer una experiencia visual atractiva y fluida. Su objetivo es presentar información de manera clara, utilizando componentes dinámicos y un diseño responsivo.',
      image: 'https://i.imgur.com/Ofm6Y8P.png',
      link: 'https://github.com/NoLimitSolutionsTI/NoLimitSolutionsTI',
      programmingLanguage: [
        { id: 1, name: 'ReactJS' }
      ]
    }
  ];

  getLanguageIcon(languageName: string): string {
    const icons: { [key: string]: string } = {
      'Spring Boot': 'fa-solid fa-leaf',
      'Angular': 'fa-brands fa-angular',
      'ReactJS': 'fa-brands fa-react'
    };
    return icons[languageName] || 'pi pi-file';
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
