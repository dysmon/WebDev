from django.http import JsonResponse
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


def get_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_company(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data)


def get_vacancy_list_by_company(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

    vacancies = company.vacancy_set.all()

    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist:
        return JsonResponse("Vacancy does not exist")
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)


def get_top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_ten_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
