from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "companies"


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"{self.name} - {self.company.name}"

    class Meta:
        verbose_name_plural = "vacancies"

