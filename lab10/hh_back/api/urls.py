from django.urls import path, include

from api.views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:pk>', company_detail),
    path('companies/<int:pk>/vacancies', vacancy_list_by_company),
    path('vacancies/', VacancyListApiView.as_view()),
    path('vacancies/<int:pk>', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacancyAPIView.as_view())
]
