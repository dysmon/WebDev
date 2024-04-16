import { Component } from '@angular/core';
import { Vacancy } from '../../vacancy';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css',
})
export class VacancyComponent {
  companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private service: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.companyId = Number(params.get('id'));
      this.fetchVacancies(this.companyId);
    });
  }

  fetchVacancies(companyId: number): void {
    this.service.getVacanciesByCompanyId(companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
}
