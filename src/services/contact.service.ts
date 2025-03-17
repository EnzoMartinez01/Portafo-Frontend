import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(contactData: any) {
    return this.http.post(`${this.apiUrl}`, contactData, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
