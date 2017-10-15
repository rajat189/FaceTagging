from django.db import models

class Picture(models.Model):
    name=models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Picture_tags(models.Model):
    pic_id=models.ForeignKey(Picture,on_delete=models.CASCADE)
    name=models.CharField(max_length=50)
    pic_x=models.IntegerField(default=0)
    pic_y=models.IntegerField(default=0)
