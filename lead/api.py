from .models import LeadModel
from .serializer import LeadSerializer
from rest_framework import viewsets, permissions


class LeadViewSet(viewsets.ModelViewSet):
    queryset = LeadModel.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = LeadSerializer
