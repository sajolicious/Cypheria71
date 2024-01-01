# api/urls.py
from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()

router.register("ServiceCRUD", views.ServiceModelviewSets, basename="ServiceCRUD")
router.register(
    "ServiceReadOnly", views.ServiceModelReadOnlyviewSets, basename="ServiceReadOnly"
)
router.register("contactus", views.ContactUsViewSet, basename="contactus")
router.register("Project", views.ProjectModelviewSets, basename="Project")
router.register("TeamMember", views.TeamMemberModelviewSets, basename="TeamMember")

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include(router.urls)),
    # Include your app-specific URLs here
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
