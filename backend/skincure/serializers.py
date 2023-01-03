from rest_framework import serializers
from .models import Profile, Result

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user']
        
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ['id', 'profile', 'skin_disease', 'accuracy', 'name', 'age', 'sex', 'pic']