from django.db import models

class Vehicle(models.Model):
    branch = models.CharField(max_length=200)
    applicant = models.CharField(max_length=200)
    company_branch = models.CharField(max_length=200)

    def __str__(self):
        return self.applicant