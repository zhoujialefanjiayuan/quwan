import random

with open(r'C:\Users\Lenovo\Desktop\names.txt', 'r' ) as f:
    p = f.readlines()
    alllist = []
    for i in p:
        path  = '/static/midpic/' + i.strip()
        name = i.strip().split('.')[0]
        price = random.randrange(100,1000)
        set = (path,name,price)
        alllist.append(set)
    print(alllist)


