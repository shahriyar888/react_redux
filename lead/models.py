from django.db import models



class LeadModel(models.Model):
    name = models.CharField(max_length=200)
    email=models.EmailField(unique=True)
    message = models.CharField(max_length=500,null=True)
    created_at = models.DateTimeField(auto_now_add=True)