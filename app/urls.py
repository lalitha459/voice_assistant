from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name="home"),
    path('english_search/voice_search/',views.english,name="english"),
    path('telugu_search/voice_search/',views.telugu,name="telugu"),
    path('hindi_search/voice_search/',views.hindi,name="hindi"),
    path('marathi_search/voice_search/',views.marathi,name="marathi"),
    path('tamil_search/voice_search/',views.tamil,name="tamil"),
]