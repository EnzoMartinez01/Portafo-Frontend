import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use(localStorage.getItem('language') || 'es');
  }

  changeLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
