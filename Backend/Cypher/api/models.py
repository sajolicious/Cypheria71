from django.db import models


class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.created_at}"


class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='service_images/', null=True, blank=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    technologies_used = models.CharField(max_length=255)
    image = models.ImageField(upload_to='Project_images/', null=True, blank=True)
    project_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='team_images/', null=True, blank=True)

    def __str__(self):
        return self.name
