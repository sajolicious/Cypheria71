from rest_framework import generics, status
from rest_framework.response import Response
from .models import ContactUs
from .serializers import ContactUsSerializer


class ContactUsListCreateView(generics.ListCreateAPIView):
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


class ContactUsDetailView(generics.RetrieveDestroyAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
