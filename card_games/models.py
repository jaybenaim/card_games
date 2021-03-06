from django.db import models 
from django.forms import ModelForm 
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from datetime import date 
from django import forms 
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Game(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
    player_amount = models.IntegerField(blank=False, null=False) 
    score = models.IntegerField(blank=False, null=False) 
    datetime = models.DateTimeField(blank=False, null=False, auto_now_add=True)
    progress = models.CharField(max_length=225)


    def __str__(self): 
        return self.name 
