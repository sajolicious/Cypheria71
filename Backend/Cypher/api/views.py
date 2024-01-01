from rest_framework import generics, status
from rest_framework.response import Response
from .models import ContactUs, Service, Project, TeamMember
from .serializers import ContactUsSerializer, ServiceSerializer, ProjectSerializer, TeamMemberSerializer
from rest_framework import viewsets

class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

    def create(self, request, *args, **kwargs):
        # Check if a similar message already exists
        name = request.data.get("name", "")
        email = request.data.get("email", "")
        message = request.data.get("message", "")

        existing_messages = ContactUs.objects.filter(
            name=name, email=email, message=message
        )

        if existing_messages.exists():
            return Response(
                {"detail": "A similar message already exists."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class ServiceModelviewSets(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceModelReadOnlyviewSets(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectModelviewSets(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TeamMemberModelviewSets(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer