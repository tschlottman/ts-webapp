import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { CertsComponent } from './certs/certs.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'nav', component: NavBarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'certs', component: CertsComponent},
    {path: 'experience', component: ExperienceComponent}
];
