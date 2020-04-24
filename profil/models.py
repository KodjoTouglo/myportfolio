from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(max_length=350)



class Contact(models.Model):
    nom = models.CharField(max_length=150, blank=True, null=True)
    email = models.EmailField(max_length=200, unique=True)
    objet = models.CharField(max_length=200)
    message = models.CharField(max_length=500)

    def __str__(self):
        return "{0} {1}".format(self.nom, self.email)
    
    class Meta:
        db_table = 'contact'
