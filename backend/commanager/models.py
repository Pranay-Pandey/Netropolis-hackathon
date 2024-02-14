from django.db import models

# Create your models here.
# name - 
#  dob - 
#  location - 
#  area -
class ComManager(models.Model):
    name = models.CharField(max_length=100)
    dob = models.DateField()
    location = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'com_manager'