from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    token = models.CharField(max_length=256)

class Shops(models. Model):
    path = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.IntegerField()
#
# "id": "1",
# 		"src":"midpic/phone.jpg",
# 		"bg":"midpic/show1.jpg",
# 		"bg1":"midpic/show2.jpg",
# 		"name":"商品名：phone",
# 		"price":"商品价格：￥65.0",
# 		"single":"65",
# 		"explain":"妖膜 华为荣耀V8智能钢化膜（白色边框）"

class Goods(models.Model):
    path = models.CharField(max_length=100)
    path_1 = models.CharField(max_length=100)
    path_2 = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    store = models.IntegerField(max_length=100)
    instr = models.CharField(max_length=100)

class Cart(models.Model):
    # 用户
    user = models.ForeignKey(Users)
    # 商品
    good = models.ForeignKey(Goods)
    # 商品个数
    number = models.IntegerField()
    # 是否选中
    isselect = models.BooleanField(default=True)

class Order(models.Model):
    user = models.ForeignKey(Users)
    # 创建时间
    createtime = models.DateTimeField(auto_now_add=True)
    # 状态
    # 0 未付款
    # 1 已付款
    # 2 待收货
    status = models.IntegerField(default=0)
    # 订单号
    identifier = models.CharField(max_length=256)
    payed = models.IntegerField(default=0) #已支付金额

class OrderGoods(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    # 商品
    goods = models.ForeignKey(Goods)
    # 个数
    number = models.IntegerField()  # 1


