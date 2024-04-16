import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Company } from '../../company';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css',
})
export class CompanyListComponent {
  companies: Company[] = [];

  constructor(private service: ApiService) {}

  ngOnInit() {
    console.log('hello');
    this.service
      .getCompanies()
      .subscribe((companies) => (this.companies = companies));
  }
}
