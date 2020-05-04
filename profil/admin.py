from django.contrib import admin
from .models import Contact, Service, About_me


class ContactAdmin(admin.ModelAdmin):
    list_display = ['id', 'nom', 'email', 'objet', 'message' ]


class About_meAdmin(admin.ModelAdmin):
    list_display = ['biographie']

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']


admin.site.register(Contact, ContactAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(About_me, About_meAdmin)
