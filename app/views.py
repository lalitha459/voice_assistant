from re import template
from urllib import request
from django.shortcuts import render,get_object_or_404
from .models import Farmer_Details
from django.views.generic.base import View

# Create your views here.
def home(request):
    return render(request,'index.html')

def english(request):
    return render(request,'english.html')


def telugu(request):
    return render(request,'telugu.html')

def hindi(request):
    return render(request,'hindi.html')

def marathi(request):
    return render(request,'marathi.html')

def tamil(request):
    return render(request,'tamil.html')
        
            
        
            
    


