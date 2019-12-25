from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=300)
    b_address = models.CharField( max_length=200)
    b_postal = models.CharField(max_length=50)
    b_city = models.CharField(max_length=50)
    b_province = models.CharField(max_length=50)
    c_phone = models.CharField(max_length=50)
    c_email = models.EmailField(max_length=254)
    service_type = models.CharField(max_length=100)
    open_time = models.CharField(max_length=250)
    d_desc = models.TextField()