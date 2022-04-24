from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import RoomModel


class RoomView(generics.ListAPIView):
    serializer_class = RoomSerializer
    queryset = RoomModel.objects.all()

class CreateRoomView(generics.CreateAPIView):
    serializer_class = RoomSerializer
    queryset = RoomModel

