import hashlib
import random
import time

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import *

# 随机生成token
def cr_token():
    t = time.time
    num = random.randrange(10000)
    string= str(t)+str(num)
    md5 = hashlib.md5()
    md5.update(string.encode('utf-8'))
    return  md5.hexdigest()

# 登录首页
def index(request,one=0):
    #登陆验证身份
    token = request.session.get('token')
    shops = Shops.objects.all()
    # 轮播图使用图片
    needshops = shops[8:12]
    # 渲染使用的图片
    showshops = shops[0:3]
    num=random.randrange(6,50)
    othernum = num+8
    leftshops =shops[num:othernum]
    if token:
        get_user =Users.objects.get(token=token)
        return render(request,'index.html',context={'get_user':get_user,'shops':needshops,'showshops':showshops,'leftshops':leftshops,"isture":one})
    else:
        return render(request, 'index.html',context={'shops':needshops,'showshops':showshops,'leftshops':leftshops,"isture":one})

# 登录
def login(request):
    gcount = request.POST.get('email')
    gpassword = request.POST.get('password')

    oneuser = Users.objects.filter(email=gcount).filter(password=gpassword)

    if oneuser.count():
        tokens=cr_token()
        user = oneuser.first()
        user.token = tokens
        user.save()
        request.session['token'] = user.token
        # print(request.session['token'])
        return redirect('app:index',0)
    else:
        # isture = 1
        # return  render(request,'index.html',context={'isture':isture})
        return redirect('app:index',1)

# 注册
def regist(request):
    count = request.POST.get('email')
    username = request.POST.get('username')
    password = request.POST.get('password')
    token = cr_token()
    user = Users()
    user.email = count
    user.password = password
    user.token = token
    user.username = username
    user.save()
    request.session['token']= token
    request.session.set_expiry(600)
    return redirect("app:index",0)

#退出
def out(request):
    request.session.flush()
    return redirect('app:index',0)

# 首页展示商品
def shop_date(request):
    shop_date = Shops.objects.all()[0:3]
    return render(request,'shop.html')

# 点击显示商品详情
def showgoods(request,one=0,goodsname=''):
    # 登陆验证身份
    token = request.session.get('token')
    good =Goods.objects.get(name=goodsname)



    if token:
        get_user =Users.objects.get(token=token)
        data ={'get_user':get_user,
               "isture":one,
               'good':good
               }
        return render(request,'shop.html',context=data)
    else:
        data = {"isture":one,
                'good': good,
                }
        return render(request, 'shop.html',context=data)

# 检查邮箱是否可用
def checkemial(request):
    print('qwe')
    email = request.GET.get('email')
    print(email)

    try:
        already = Users.objects.get(email=email)
    except:
        return JsonResponse({'statu':1})
    else:
        return  JsonResponse({'statu':0})


def cart(request):
    return render(request,'money.html')