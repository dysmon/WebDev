from django.urls import path, include

from api.views import *

urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:id>', get_company),
    path('companies/<int:id>/vacancies', get_vacancy_list_by_company),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:id>', get_vacancy),
    path('vacancies/top_ten/', get_top_ten_vacancies)
]
