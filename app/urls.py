from django.conf.urls import url

from app import views

urlpatterns=[
    url(r'^$',views.index),
    url(r'^index.html/(\d+)/$',views.index,name='index'),
    url(r'^login$',views.login,name='login'),
    url(r'^regist$',views.regist,name="regist"),
    url(r'^out$',views.out,name='out'),
    url(r'^shop_date$',views.shop_date,name='shop_date'),
    # 商品详情页面
    url(r'^showgoods/(\d+)/(\w+)/$',views.showgoods, name='showgoods'),
    url(r'^checkemail$',views.checkemial),
    url(r'^cart/$',views.cart,name='cart')

]