
from django.conf.urls import url,include
from django.contrib import admin
from tagging import urls
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^images/', include('tagging.urls')),
]
