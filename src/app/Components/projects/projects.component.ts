import { Component } from '@angular/core';
import {Carousel} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";
import {RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    Carousel,
    PrimeTemplate,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];


  projectsBackend = [
    {
      id: 1,
      title: 'Ecommerce',
      description: 'Este Ecommerce es una plataforma de compras en línea desarrollada con Angular en el frontend y Spring Boot en el backend, permitiendo una experiencia de usuario fluida y segura.',
      image: 'https://i.imgur.com/oHJ1vLp.png',
      link: 'https://github.com/EnzoMartinez01/E-Commerce/tree/Backend',
      languageProgramming: [
        { id: 1, name: 'Spring Boot' },
        { id: 2, name: 'MySQL' }
      ]
    },
    {
      id: 2,
      title: 'Mantenimiento de Entidades - Backend',
      description: 'Este sistema está diseñado para la gestión y mantenimiento de datos a través de grillas interactivas, permitiendo a los usuarios visualizar, filtrar, editar y eliminar registros de manera eficiente. Se desarrolló utilizando Angular en el frontend y Spring Boot en el backend, asegurando una arquitectura modular y escalable.',
      image: 'https://i.imgur.com/CyVrGeF.png',
      link: 'https://github.com/EnzoMartinez01/Prueba-tecnica/tree/Backend',
      languageProgramming: [
        { id: 1, name: 'Spring Boot' },
        { id: 2, name: 'MySQL' }
      ]
    },
    {
      id: 3,
      title: 'Inventario',
      description: 'Este sistema de gestión de inventario permite un control eficiente y automatizado de los productos almacenados, proporcionando herramientas para la generación de reportes Kardex, almacenamiento seguro de datos, y opciones de exportación y descarga.',
      image: 'https://i.imgur.com/X5zQllq.png',
      link: 'https://github.com/EnzoMartinez01/Inventary/tree/Backend',
      languageProgramming: [
        { id: 1, name: 'Spring Boot' },
        { id: 2, name: 'MySQL' }
      ]
    }
  ];

  projectsFrontend = [
    {
      id: 1,
      title: 'Ecommerce',
      description: 'Este Ecommerce es una plataforma de compras en línea desarrollada con Angular en el frontend y Spring Boot en el backend, permitiendo una experiencia de usuario fluida y segura.',
      image: 'https://i.imgur.com/ev4LNEg.png',
      link: 'https://github.com/EnzoMartinez01/E-Commerce/tree/Frontend',
      languageProgramming: [
        { id: 1, name: 'Spring Boot' },
        { id: 2, name: 'Angular' }
      ]
    },
    {
      id: 2,
      title: 'Mantenimiento de Entidades',
      description: 'Este sistema está diseñado para la gestión y mantenimiento de datos a través de grillas interactivas, permitiendo a los usuarios visualizar, filtrar, editar y eliminar registros de manera eficiente. Se desarrolló utilizando Angular en el frontend y Spring Boot en el backend, asegurando una arquitectura modular y escalable.',
      image: 'https://i.imgur.com/7gD3RFd.png',
      link: 'https://github.com/EnzoMartinez01/Prueba-tecnica/tree/Frontend',
      languageProgramming: [
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
      languageProgramming: [
        { id: 1, name: 'ReactJS' }
      ]
    },
    {
      id: 4,
      title: 'Chat Bot Python',
      description: 'Este chatbot basado en redes neuronales es capaz de mejorar sus respuestas a medida que interactúa con los usuarios. Utilizando técnicas avanzadas de Procesamiento de Lenguaje Natural (NLP) y Aprendizaje Profundo, el sistema analiza patrones de conversación y ajusta sus respuestas para brindar una experiencia cada vez más personalizada y precisa.',
      image: 'https://i.imgur.com/wOHYJf7.png',
      link: 'https://github.com/EnzoMartinez01/ChatBotPY',
      languageProgramming: [
        { id: 1, name: 'Python' }
      ]
    }
  ];

  getLanguageIcon(languageName: string): string {
    const icons: { [key: string]: string } = {
      'Spring Boot': 'fa-solid fa-leaf',
      'Angular': 'fa-brands fa-angular',
      'ReactJS': 'fa-brands fa-react',
      'Python': 'fa-brands fa-python',
      'Java': 'fa-brands fa-java',
      'C#': 'fa-brands fa-csharp',
      'PHP': 'fa-brands fa-php',
      'SQL Server': 'fa-brands fa-windows',
      'MySQL': 'fa-solid fa-database',
    };
    return icons[languageName] || 'pi pi-file';
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
