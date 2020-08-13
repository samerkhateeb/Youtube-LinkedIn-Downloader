# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-08-13 21:02
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pageextensions', '0005_auto_20200813_2359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pageextension',
            name='author',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='author', to=settings.AUTH_USER_MODEL),
        ),
    ]
