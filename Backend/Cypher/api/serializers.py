from rest_framework import serializers
from .models import ContactUs
from .models import Service
from .models import Project
from .models import TeamMember

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ["id", "name", "email", "phone_number", "message", "created_at"]

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'image', 'category']
    
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'