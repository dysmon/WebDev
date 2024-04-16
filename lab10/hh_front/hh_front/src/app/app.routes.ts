import { Routes } from '@angular/router';
import { VacancyComponent } from './vacancy/vacancy.component';
import { CompanyListComponent } from './company-list/company-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent, title: 'Companies' },
  {
    path: 'vacancies/:id',
    component: VacancyComponent,
    title: 'Vacancies by specific company',
  },
];
