import random

from django.test import TestCase

# Create your tests here.
t = [
    {
        "id": "1",
        "src": "midpic/phone.jpg",
        "bg": "midpic/show1.jpg",
        "bg1": "midpic/show2.jpg",
        "name": "商品名：phone",
        "price": "商品价格：￥65.0",
        "single": "65",
        "explain": "妖膜 华为荣耀V8智能钢化膜（白色边框）"

    },
    {
        "id": "2",
        "src": "midpic/show_man.jpg",
        "bg": "midpic/show_man.jpg",
        "bg1": "midpic/man2.jpg",
        "name": "商品名：man",
        "price": "商品价格：￥20.0",
        "single": "20",
        "explain": "稻草人小夜灯-直插黄光"

    },
    {
        "id": "3",
        "src": "midpic/show_bag2.jpg",
        "bg": "midpic/show_bag2.jpg",
        "bg1": "midpic/bag2.jpg",
        "name": "商品名：bag",
        "price": "商品价格：￥90.0",
        "single": "90",
        "explain": "手工定制登山背包-NO.27"

    }

]

list = []
for i in t :
    num = random.randrange(10000)
    q = i["name"].strip().split('：')
    print(type(q))

    set = ('/static/'+i['src'],'/static/'+i['bg'],'/static/'+i["bg1"],q[1],i[ "price"].strip('"" ').split('：')[1],num,i["explain"])
    list.append(set)
print(list)
