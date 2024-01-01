import imp
from django.contrib import admin
from .models import ContactUs
from .models import Service
from .models import Project
from .models import TeamMember
admin.site.register(ContactUs)
admin.site.register(Service)
admin.site.register(Project)
admin.site.register(TeamMember)