from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register ('api/ServiceCRUD',views.ServiceModelviewSets, basename = 'ServiceCRUD')
router.register ('api/ServiceReadOnly',views.ServiceModelReadOnlyviewSets, basename = 'ServiceReadOnly')
router.register('api/contactus', views.ContactUsViewSet, basename='contactus')


urlpatterns = [
    path("admin/", admin.site.urls),
    
    path('api', include(router.urls)),
]
