import requests
import json
import random
from threading import Thread


def f():
    name = str(random.randint(1, 1000000))
    stuId = str(random.randint(100000000000, 999999999999))
    gender = random.randint(0, 2)
    college = str(random.randint(1, 100000))
    campus = str(random.randint(1, 100000))
    phone = str(random.randint(10000000000, 99999999999))
    qq = str(random.randint(100000, 99999999999))
    region = random.choice(["朝晖", "屏峰", "莫干山"])
    want1 = ""
    want2 = ""
    if region == "朝晖":
        zh = ["办公室", "活动部",
              "Touch产品部", "编辑工作室",
              "视觉影像部", "开发部",
              "易班文化工作站", "小弘工作室", ]

        want1 = random.choice(zh)
        zh.remove(want1)
        want2 = random.choice(zh)
    elif region == "屏峰":
        pf = ["办公室", "活动部",
              "Touch产品部", "小弘工作室",
              "编辑工作室", "视觉影像部",
              "开发部", "易班文化工作站"]
        want1 = random.choice(pf)
        pf.remove(want1)
        want2 = random.choice(pf)
    else:
        mgs = ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "开发部", ]
        want1 = random.choice(mgs)
        mgs.remove(want1)
        want2 = random.choice(mgs)
    profile = str(random.randint(100000000000, 999999999999))
    feedback = str(random.randint(100000000000, 999999999999))

    data = {
        'name': name,
        'stu_id': stuId,
        'gender': gender,
        'college': college,
        'campus': campus,
        'phone': phone,
        'qq': qq,
        'region': region,
        'want1': want1,
        'want2': want2,
        'profile': profile,
        'feedback': feedback,
    }
    print(json.dumps(data))
    headers = {'Content-Type': 'application/json',
               'Authorization': '123'}
    response = requests.post('http://101.34.27.200:8888/api/new_normal',
                             headers=headers,
                             data=json.dumps(data))


for i in range(500):
    t = Thread(target=f)
    t.start()
