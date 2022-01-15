from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def hello(request):    
    token = Token.objects.get(user= User.objects.get(id=1))
    return HttpResponse(token.key)