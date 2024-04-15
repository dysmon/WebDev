from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company, Vacancy


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'city']  # Fields to display in the list view


class VacancyAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'salary']  # Fields to display in the list view
    list_filter = ['company']  # Add filters for company field


admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)
