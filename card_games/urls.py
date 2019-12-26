from django.contrib import admin
from django.urls import path, include 
from .views import *

from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.authtoken import views as rest_framework_views
from .views import CustomObtainAuthToken as CustomTokenView


# Serializers define the API representation.
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'is_staff' ]

# ViewSets define the view behavior.

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'games', GameViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')), 
    # url(r'^api-token-auth/', CustomAuthToken.as_view()), 
    # url('api-token-auth/', rest_framework_views.obtain_auth_token),
    url(r'^authenticate/', CustomTokenView.as_view()),
]