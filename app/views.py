import hashlib
import random
import time

from django.http import HttpResponse
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
def index(request):
    #登陆验证身份
    token = request.session.get('token')
    shops = Shops.objects.all()
    needshops = shops[18:22]
    if token:
        get_user =Users.objects.get(token=token)
        return render(request,'index.html',context={'get_user':get_user,'shops':needshops})
    else:
        return render(request, 'index.html',context={'shops':needshops})

# 登录
def login(request):
    gcount = request.POST.get('count')
    gpassword = request.POST.get('password')

    oneuser = Users.objects.filter(count=gcount).filter(password=gpassword)

    if oneuser.count():
        tokens=cr_token()
        user = oneuser.first()
        user.token = tokens
        user.save()
        request.session['token'] = user.token
        print(request.session['token'])
        return redirect('app:index')
    else:
        isture = 1
        return  render(request,'index.html',context={'isture':isture})

# 注册
def regist(request):
    count = request.POST.get('count')
    print(count)
    username = request.POST.get('username')
    password = request.POST.get('password')
    token = cr_token()
    user = Users()
    user.count = count
    user.password = password
    user.token = token
    user.username = username
    user.save()
    request.session['token']= token
    request.session.set_expiry(600)
    return redirect("app:index")

#退出
def out(request):
    request.session.flush()
    return redirect('app:index')