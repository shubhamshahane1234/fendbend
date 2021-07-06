from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Contact
# specially for django restful api 
from rest_framework import  viewsets
from .serializers import Contactserializers
from .models import Contact



# Create your views here.
def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        phone = request.POST.get('phone')
        contact = Contact(name=name,surname=surname,phone=phone)
        contact.save()
   
        
    return render(request,'contact.html')



# for django restful api from work
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = Contactserializers