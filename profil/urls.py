from django.urls import path
from . import views

urlpatterns = [
    path("", views.profil, name="profil"),
    path("ajaxContact",views.profil),
]

