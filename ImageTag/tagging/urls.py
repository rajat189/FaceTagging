
from django.conf.urls import url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<p_id>[0-9]+)/$',views.detail,name="detail"),
    url(r'^(?P<p_id>[0-9]+)/savetag/$', views.savetag, name='savingtag'),
    url(r'^(?P<p_id>[0-9]+)/taglist/$', views.taglist, name='taglist'),
    url(r'^api/$',views.TagList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$',views.TagDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)