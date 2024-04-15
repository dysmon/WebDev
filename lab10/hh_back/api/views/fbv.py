from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Company
from api.serializers import CompanySerializer, VacancySerializer


@api_view(["GET", "POST"])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted": True})


@api_view(["GET"])
def vacancy_list_by_company(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == "GET":
        vacancies = company.vacancy_set.all()

        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
