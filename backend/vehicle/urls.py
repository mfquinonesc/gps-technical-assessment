from django.urls import include, path
from rest_framework import routers
from vehicle import views

router = routers.DefaultRouter()
router.register(r'vehicles', views.VehicleView, 'vehicle')

urlpatterns = [
    path('vehicle/', include(router.urls))
]