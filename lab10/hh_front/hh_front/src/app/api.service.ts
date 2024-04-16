import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../company';
import { Vacancy } from '../vacancy';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies`);
  }

  getVacanciesByCompanyId(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `${this.BASE_URL}/companies/${id}/vacancies`
    );
  }
}
