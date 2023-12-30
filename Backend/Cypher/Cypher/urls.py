from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/contactus/",
        views.ContactUsListCreateView.as_view(),
        name="contactus-list-create",
    ),
    path(
        "api/contactus/<int:pk>/",
        views.ContactUsDetailView.as_view(),
        name="contactus-detail",
    ),
]
