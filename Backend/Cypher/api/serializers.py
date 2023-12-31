from rest_framework import serializers
from .models import ContactUs
from .models import Service


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ["id", "name", "email", "phone_number", "message", "created_at"]

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'image', 'category']