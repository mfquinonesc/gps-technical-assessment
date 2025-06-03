from django.db import models

class Vehicle(models.Model):
    brand = models.CharField(max_length=200)
    applicant = models.CharField(max_length=200)
    company_brand = models.CharField(max_length=200)

    def __str__(self):
        return self.applicant