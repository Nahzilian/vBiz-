from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('',include('frontend.urls')),
    path('',include('companies.urls')),
    path('',include('accounts.urls')),
    path('admin/', admin.site.urls),
]
