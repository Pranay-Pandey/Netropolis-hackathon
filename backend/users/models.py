from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    dob = models.DateField()
    persona = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    field_of_specialization = models.CharField(max_length=100)
    completed_quest_tags = models.CharField(max_length=100, default="", blank=True)
    active_quest = models.BooleanField(default=False)
    email = models.EmailField(max_length=100, unique=True, primary_key=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "users"
