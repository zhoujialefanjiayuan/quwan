from django.db import models

# Create your models here.
class Users(models.Model):
    count = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    token = models.CharField(max_length=256)

class Shops(models. Model):
    path = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.IntegerField()

