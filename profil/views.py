from django.shortcuts import render
from profil.models import Contact, Service
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

def profil(request):
    service = Service.objects
    context = {
        'service': service
    }
    if request.method == 'POST':
        nom = request.POST['nom']
        email = request.POST['email']
        objet = request.POST['objet']
        message = request.POST['message']

        user_count = Contact.objects.filter(email=email).count()

        if user_count > 0:
            messages.error(request, 'Votre E-mail est déjà enrégistré, veuillez entrer un autre')
            return  render(request, 'profil.html', context)
        else:
            Contact.objects.create(nom=nom, email=email, objet=objet, message=message)
            return render(request, 'profil.html')
    return render(request, 'profil.html', context)
