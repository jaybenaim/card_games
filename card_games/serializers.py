from django.contrib.auth.models import User, Group 
from rest_framework import serializers
from .models import * 

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'groups', 'password']

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class GameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Game 
        fields = '__all__'

    def create(self, validated_data): 
        return Game.objects.create(**validated_data)

    def update(self, game, validated_data):
        game.user = validated_data.get("user", game.user)
        game.player_amount = validated_data.get("player_amount", game.player_amount)
        game.score = validated_data.get("score", game.score)
        game.datetime = validated_data.get("datetime", game.datetime)
        game.progress = validated_data.get("progress", game.progress)
