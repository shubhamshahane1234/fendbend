from django.contrib import admin
from django.urls import path,include
from django.urls.conf import include
from . import views
# . means this folder where we are now 


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.index,name="index")
]



# django restfulapi 
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Contact', views.ContactViewSet)
urlpatterns = [
    path('',views.index,name="index"),  
    path('api', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]