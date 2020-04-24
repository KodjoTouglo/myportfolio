from django.contrib import admin
from .models import Contact, Service


class ContactAdmin(admin.ModelAdmin):
    list_display = ['id', 'nom', 'email', 'objet', 'message' ]


class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']


admin.site.register(Contact, ContactAdmin)
admin.site.register(Service, ServiceAdmin)
