import { Component } from '@angular/core';
import {ContactService} from '../../../services/contact.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    names: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) { }

  sendMessage() {
    this.contactService.sendMessage(this.contactForm).subscribe(
      response => {
        console.log('Mensaje enviado:', response);
        alert('Mensaje enviado exitosamente');
      },
      error => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje');
      }
    )
  }
}
