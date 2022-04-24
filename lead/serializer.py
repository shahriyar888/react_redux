from rest_framework.serializers import ModelSerializer
from .models import LeadModel


class LeadSerializer(ModelSerializer):
    class Meta:
        model = LeadModel
        fields = '__all__'
