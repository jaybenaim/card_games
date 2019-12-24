from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, reverse, redirect, get_object_or_404
from django.views.decorators.http import require_http_methods
# from .forms import *
# from .models import *
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from card_games.serializers import UserSerializer, GroupSerializer


def root(request): 
    return redirect('home/')
    
def home(request): 
        return render(request, 'index.html')
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
