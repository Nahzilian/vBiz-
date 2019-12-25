from .models import Company
from rest_framework import viewsets, permissions
from .serializers import CompanySerializer

#Viewsets
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CompanySerializer