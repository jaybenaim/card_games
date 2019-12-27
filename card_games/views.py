from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, reverse, redirect, get_object_or_404
from django.views.decorators.http import require_http_methods
# from .forms import *
# from .models import *
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from card_games.serializers import UserSerializer, GroupSerializer, GameSerializer
from .models import * 
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import viewsets, permissions

def root(request): 
    return redirect('home/')
    
def home(request): 
        return render(request, 'index.html')


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        
        return Response({'token': token.key, 'id': token.user_id , "username": token.user.username })

class UserViewSet(viewsets.ModelViewSet): 
    """ API endpoint that allows users to be viewed or edited """ 
    queryset = User.objects.filter()
    serializer_class = UserSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.AllowAny,)
        if self.request.method == 'GET':
            self.permission_classes = (permissions.AllowAny,)
        return super(UserViewSet, self).get_permissions()
    

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.AllowAny,)
        if self.request.method == 'GET':
            self.permission_classes = (permissions.AllowAny,)
        return super(GameViewSet, self).get_permissions()

