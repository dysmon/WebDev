from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


def get_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_company(request, id):
    company = get_object_or_404(Company, pk=id)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data)


def get_vacancy_list_by_company(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.vacancy_set.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancy(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)


def get_top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]  # Example: Get top ten vacancies based on salary
    serializer = VacancySerializer(top_ten_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
