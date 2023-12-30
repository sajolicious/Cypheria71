from rest_framework.test import APITestCase
from rest_framework import status
from .models import ContactUs
from .serializers import ContactUsSerializer


class ContactUsTests(APITestCase):
    def test_create_contact_us_message(self):
        response = self.client.post(
            "/api/contactus/",
            {
                "name": "John",
                "email": "john@example.com",
                "phone_number": "123-456-7890",
                "message": "Test message",
            },
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_serializer_valid(self):
        # Create a valid data dictionary for the serializer
        data = {
            "name": "John",
            "email": "john@example.com",
            "phone_number": "123-456-7890",
            "message": "Test message",
        }
        serializer = ContactUsSerializer(data=data)
        self.assertTrue(serializer.is_valid())

    def test_list_view(self):
        response = self.client.get("/api/contactus/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
