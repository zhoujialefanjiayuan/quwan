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
    url(r'^cart/$',views.cart,name='cart'),
    url(r'^addcart/$',views.addcart,name='addcart'),
    url(r'^changeisselect/$',views.changeisselect),
    url(r"^selectall/$",views.selectall),
    url(r'^dowmnum/$',views.dowmnum),
    url(r'^addnum/$',views.addnum),
    url(r'^sumprice/$',views.sumprice),
    #订单详情展示，确认支付页面
    url(r'^sureorder/$',views.sureorder,name='sureorder'),
    url(r'^orderstatu/$',views.orderstatu,name='orderstatu'),
    url(r'^notpayorder/$',views.notpayorder,name='notpayorder'),
    url(r'^showorder/$',views.showorder,name='showorder')

]