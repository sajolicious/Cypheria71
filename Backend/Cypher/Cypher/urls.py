# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
from api import urls as api_urls  # Import your app-specific urls module

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include(api_urls)),
]
