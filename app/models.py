from django.db import models


# Create your models here.
class Farmer_Details(models.Model):
    product=models.CharField(max_length=30)
    info=models.CharField(max_length=20)
    information=models.CharField(max_length=50)