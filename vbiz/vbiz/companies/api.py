from .models import Company
from rest_framework import viewsets, permissions
from .serializers import CompanySerializer

#Viewsets
class CompanyViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = CompanySerializer

    def get_queryset(self):
        return self.request.user.companies.all()
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)