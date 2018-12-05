from django.conf.urls import url

from app import views

urlpatterns=[
    url(r'^$',views.index),
    url(r'^index.html$',views.index,name='index'),
    url(r'^login$',views.login,name='login'),
    url(r'^regist$',views.regist,name="regist"),
    url(r'^out$',views.out,name='out')
]