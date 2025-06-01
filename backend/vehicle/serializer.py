from rest_framework import serializers
from .models import Vehicle

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        # fields = ['id','branch','applicant','company_branch']
        fields = '__all__'