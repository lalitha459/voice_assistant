from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('app.urls')),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

# Customizing admin texts

admin.site.site_header='Voice Assistant'
admin.site.index_title='Information about Voice Assistant'
admin.site.site_title='V.A'
