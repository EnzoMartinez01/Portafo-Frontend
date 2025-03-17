import { Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {ProjectsComponent} from './Components/projects/projects.component';
import {AboutComponent} from './Components/about/about.component';
import {ContactComponent} from './Components/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/'}
];
