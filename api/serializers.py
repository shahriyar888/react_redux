from rest_framework.serializers import ModelSerializer
from .models import RoomModel


class RoomSerializer(ModelSerializer):
    class Meta:
        model = RoomModel
        fields = ['id', 'code', 'host', 'guest_can_pause', 'vote_to_skip', 'created_at']
