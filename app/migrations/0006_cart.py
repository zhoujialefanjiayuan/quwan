# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-12-12 05:01
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20181210_1751'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('isselect', models.BooleanField(default=True)),
                ('good', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Goods')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Users')),
            ],
        ),
    ]