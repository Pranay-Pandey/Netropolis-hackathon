from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=100, default="Male")
    persona = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    field_of_specialization = models.CharField(max_length=200)
    completed_quest_tags = models.CharField(max_length=100, default="", blank=True)
    active_quest = models.BooleanField(default=False)
    email = models.EmailField(max_length=200, unique=True )
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "users"

# Return schema for quests user has applied for
def QuestSchema(request):
    response = []
    for res in request:
        response.append({
            "status": res.quest.active,
            "id": res.quest.id,
            "title": res.quest.title,
            "datetime": res.quest.datetime,
            "location": res.quest.location,
            "provided_by": res.quest.provided_by,
            "duration": res.quest.duration,
            "description": res.quest.description,
            "points": res.quest.points,
            "fee": res.quest.fee,
            "allowance": res.quest.allowance,
            "tags": res.quest.tags,
        })
    return response